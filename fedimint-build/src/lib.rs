use std::env;
use std::fs::File;
use std::process::Command;

pub fn set_code_version() {
    if env::var_os("CODE_VERSION").is_none() {
        let git_hash = if File::open("./../../.git/HEAD").is_ok() {
            let output = Command::new("git")
                .args(["rev-parse", "HEAD"])
                .output()
                .unwrap();
            String::from_utf8(output.stdout).unwrap()
        } else {
            // we set a fake hash here and make it easily recognizable
            // by giving it a prefix (0x0123456)
            String::from("01234569afbe457afa1d2683a099c7af48a523c1")
        };
        println!("cargo:rustc-env=CODE_VERSION={git_hash}");
    }
    println!("cargo:rerun-if-env-changed=CODE_VERSION");
}