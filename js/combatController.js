/*

Copyright 2017 Matthew Knight

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

angular.module('combatApp', []).controller('combatController', ['$filter', function ($filter) {
        var combat = this;

        combat.pcs = [
            {
                "name": "Cutter",
                "initiative" : 17,
                "dexMod": 1
            },
            {
                "name": "Trellis",
                "initiative": 8,
                "dexMod": 2
            },
            {
                "name": "Jeannie",
                "initiative": 17,
                "dexMod": 2
            },
            {
                "name": "Mufasa",
                "initiative": 12,
                "dexMod": 0
            }
        ];

        combat.monsters = [
            {
                "name": "Gerblin",
                "current" : 4,
                "max": 8,
                "ac": 15
            },
            {
                "name": "Skellington",
                "current" : 12,
                "max": 16,
                "ac": 13
            },
            {
                "name": "Elder Red Dragon",
                "current" : 100,
                "max": 156,
                "ac": 18
            }
        ];

        combat.sortOrder = function() {
            // Sort according to initiative and dex mod
            combat.pcs.sort(function(a, b) {
                if(b.initiative == a.initiative) {
                    return parseInt(b.dexMod) - parseInt(a.dexMod);
                } else {
                    return parseInt(b.initiative) - parseInt(a.initiative);
                }
            });
        };

        combat.selectPc = function(selectedPc) {
            // Store original state
            var origState = selectedPc.selected;

            // Unselect other pcs
            combat.pcs.forEach(function (pc) {
                pc.selected = false;
            });

            // Toggle state
            selectedPc.selected = !origState;
        };

        combat.deletePc = function(selectedPc) {
            // Filter out selectedPc from list
            combat.pcs = combat.pcs.filter(function(pc) {
                return pc !== selectedPc;
            });
        };

        combat.deleteMonster = function(selectMon) {
            // Filter out selectMon from list
            combat.monsters = combat.monsters.filter(function(mon) {
                return mon !== selectMon;
            });
        };

        combat.addPc = function() {
            // Add an editable entry to pc list
            combat.pcs.push(
                {
                    "initiative": 0,
                    "dexMod": 0,
                    "editable": true
                }
            );
        };

        combat.addMonster = function() {
            // Add an editable entry to monsters list
            combat.monsters.push(
                {
                    "current": 0,
                    "ac": 10,
                    "editable": true
                }
            );
        };
    }]);
