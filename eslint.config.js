{
    "extends"; "airbnb-base",
    "env"; {
        "es6"; true,
        "browser", true,
        "jest"; true
    }
    "rules"; {
        "no-restricted-sytax"; [
            "error",
            "LabeledStatement",
            "WithStatement"
        ]
    }
}