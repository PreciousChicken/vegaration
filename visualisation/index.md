---
title: Continuous Integration Visualisation
---

## Commits per user

Bar chart showing commits per user:

<div id="commitsPerUser"></div>

<script type="text/javascript">
    var commitsPerUser = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "Bar chart showing commits per user.",
        "config": {
        "background": "#FBFAF7"
        },
        "width": 300,
        "data": {"url": "./log.json"},
        "transform": [
        {
        "aggregate": [{
        "op": "count",
        "field": "sha",
        "as": "Commits"
        }],
        "groupby": ["user"]
        }
        ],
        "mark": "bar",
        "encoding": {
        "x": {"field": "Commits", "type": "quantitative",
        "axis": {"tickMinStep": 1}
        },
        "y": {"field": "user", "type": "nominal", "sort": "descending"}
        }
        };
    vegaEmbed('#commitsPerUser',commitsPerUser);
</script>

## Passing vs Failing Tests

### add.test.js

Pie chart showing fails vs passes for add.test.js (hover over segment for tooltip display):

<div id="addPie"></div>

<script type="text/javascript">
    var addPie = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "data": {"url": "./log.json"},
        "description": "Pie chart showing pass vs fail for add_test_js",
        "config": {
        "background": "#FBFAF7"
        },
        "transform": [
        {"filter": {"field": "add_test_js", "oneOf": ["FAIL", "PASS"]}},
        {"aggregate": [{"op": "count", "as": "count"}], "groupby": ["add_test_js"]}
        ],
        "mark": {
        "type": "arc",
        "tooltip": true
        },
        "encoding": {
        "theta": {"field": "count", "type": "quantitative"},
        "color": {
        "field": "add_test_js",
        "type": "nominal",
        "scale": {
        "domain": ["FAIL", "PASS"],
        "range": ["red", "green"]
        },
        "legend": {
        "title": "Result",
        "labelExpr": "datum.value === 'FAIL' ? 'Fail' : 'Pass'"
        }
        },
        "tooltip": [
        {"field": "count", "type": "quantitative"},
        {"field": "add_test_js", "type": "nominal"}
        ],
        "text": {"field": "count", "type": "quantitative"}
        },
        "width": 300,
        "height": 300
        };
    vegaEmbed('#addPie', addPie);
</script>


### minus.test.js

Pie chart showing fails vs passes for minus.test.js (hover over segment for tooltip display):

<div id="minusPie"></div>

<script type="text/javascript">
    var minusPie = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "data": {"url": "./log.json"},
        "description": "Pie chart showing pass vs fail for minus_test_js",
        "config": {
        "background": "#FBFAF7"
        },
        "transform": [
        {"filter": {"field": "minus_test_js", "oneOf": ["FAIL", "PASS"]}},
        {"aggregate": [{"op": "count", "as": "count"}], "groupby": ["minus_test_js"]}
        ],
        "mark": {
        "type": "arc",
        "tooltip": true
        },
        "encoding": {
        "theta": {"field": "count", "type": "quantitative"},
        "color": {
        "field": "minus_test_js",
        "type": "nominal",
        "scale": {
        "domain": ["FAIL", "PASS"],
        "range": ["red", "green"]
        },
        "legend": {
        "title": "Result",
        "labelExpr": "datum.value === 'FAIL' ? 'Fail' : 'Pass'"
        }
        },
        "tooltip": [
        {"field": "count", "type": "quantitative"},
        {"field": "minus_test_js", "type": "nominal"}
        ],
        "text": {"field": "count", "type": "quantitative"}
        },
        "width": 300,
        "height": 300
    };
    vegaEmbed('#minusPie', minusPie);
</script>