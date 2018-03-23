extern crate regex;
extern crate serde_json;

use std::io::{self, BufRead};
use regex::Regex;
use std::collections::hash_map::{HashMap, Entry};

enum SearchState {
    Idle,
    Started(String),
}

fn main() {

    //parser state machine
    let mut uiStateSearch : SearchState = SearchState::Idle;

    //result set
    let mut input_usage     = HashMap::new();
    let mut app_usage       = HashMap::new();
    let mut searched        = HashMap::new();
    let mut movements       = HashMap::new();

    //matches
    let reAppDirector = Regex::new(r####"launch: fake_location/main_ui/UiAppDirector.qml:256 - AppDirector::launch: ([_A-Z]+) [0-9]+ ([0-9]{2}):([0-9]{2}):([0-9]{2})"####).unwrap();
    let reMovementState = Regex::new(r####"Vehicle movement status has changed to \[ "([_A-Z]+)" \]"####).unwrap();
    let reSearchStart   = Regex::new(r####"startSearch\(searchString: ([_a-zA-Z]+)"####).unwrap();
    let reSearchDone    = Regex::new(r####"KeyboardOkKey"####).unwrap();
    let reInputDevice   = Regex::new(r####"INPUT CHAIN UPDATED .* name = "([_a-zA-Z]+)""####).unwrap();

    println!("{{");

    let stdin = io::stdin();
    for line in stdin.lock().lines() {
        let line = line.unwrap();

        if reAppDirector.is_match(line.as_ref()) {
            for cap in reAppDirector.captures_iter(line.as_ref()) {

                let seconds = cap[2].parse::<u64>().unwrap() * 60 * 60 +
                    cap[3].parse::<u64>().unwrap() * 60  +
                    cap[4].parse::<u64>().unwrap();

                match app_usage.entry(String::from(&cap[1])) {
                    Entry::Occupied(mut entry) => {
                        *entry.get_mut() += seconds;
                    },
                    Entry::Vacant(entry) => {
                        entry.insert(seconds);
                    },
                }
            }
        }

        if reInputDevice.is_match(line.as_ref()) {
            for cap in reInputDevice.captures_iter(line.as_ref()) {

                match input_usage.entry(String::from(&cap[1])) {
                    Entry::Occupied(mut entry) => {
                        *entry.get_mut() += 1;
                    },
                    Entry::Vacant(entry) => {
                        entry.insert(1);
                    },
                }
            }
        }

        if reSearchStart.is_match(line.as_ref()) {
            for cap in reSearchStart.captures_iter(line.as_ref()) {
                uiStateSearch = SearchState::Started(String::from(&cap[1]));
            }
        }

        if reSearchDone.is_match(line.as_ref()) {
            if let SearchState::Started(s) = uiStateSearch {
                match searched .entry(String::from(s)) {
                    Entry::Occupied(mut entry) => {
                        *entry.get_mut() += 1;
                    },
                    Entry::Vacant(entry) => {
                        entry.insert(1);
                    },
                }
            }
            uiStateSearch = SearchState::Idle;
        }
        if reMovementState.is_match(line.as_ref()) {
            for cap in reMovementState.captures_iter(line.as_ref()) {
                match movements.entry(String::from(&cap[1])) {
                    Entry::Occupied(mut entry) => {
                        *entry.get_mut() += 1;
                    },
                    Entry::Vacant(entry) => {
                        entry.insert(1);
                    },
                }
            }
        }
    }



    println!(r#"    "movements": {{,"#);
    for (k,v) in movements {
        println!(r#"        "{}": {},"#, k,v);
    }
    println!("    }},");

    println!(r#"    "searches": {{,"#);
    println!(r#"        "PHONE_SEARCH": {{,"#);

    for (k,v) in searched {
        println!(r#"            "{}": {},"#, k,v);
    }
    println!("        }},");
    println!("    }},");

    println!(r#"    "input_devices": {{,"#);
    for (k,v) in input_usage {
        println!(r#"        "{}": {},"#, k,v);
    }
    println!("    }},");

    println!(r#"    "app_usage": {{,"#);
    for (k,v) in app_usage {
        println!(r#"        "{}": {},"#, k,v);
    }
    println!("    }}");
    println!("}}");
}
