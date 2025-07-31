let number_of_item_groups= 0;

let resourse_return_rate = 15.2;
let profit_margin = 20;
let home_city = "thetford";
let server = "west";

//weapons or shoes or armors or helmets or offhands or materials

let items_object = {
        tome_of_Spells :{
            name : "Tome of Spells",
            id: "OFF_BOOK",
            type: "item",
            city: "Martlock",

            recipe :{
                leather :4 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :4
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        cursed_staff :{
            name : "Cursed Staff",
            id: "MAIN_CURSEDSTAFF",
            type: "item",
            city: "BridgeWatch",

            recipe :{
                leather :0 ,
                metal_bar :8 ,
                plank :16 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        great_cursed_staff :{
            name : "Great Cursed Staff",
            id: "2H_CURSEDSTAFF",
            type: "item",
            city: "BridgeWatch",

            recipe :{
                leather :0 ,
                metal_bar :12 ,
                plank :20 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        demonic_staff :{
            name : "Demonic Staff",
            id: "2H_DEMONICSTAFF",
            type: "item",
            city: "bridgewatch",

            recipe :{
                leather :0 ,
                metal_bar :12 ,
                plank :20 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },




        frost_staff :{
            name : "Frost Staff",
            id: "MAIN_FROSTSTAFF",
            type: "item1",
            city: "Martlock",

            recipe :{
                leather :0 ,
                metal_bar :8 ,
                plank :16 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        great_frost_staff :{
            name : "Great Frost Staff",
            id: "2H_FROSTSTAFF",
            type: "item1",
            city: "Martlock",

            recipe :{
                leather :0 ,
                metal_bar :12 ,
                plank :20 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        glacial_staff :{
            name : "Glacial Staff",
            id: "2H_GLACIALSTAFF",
            type: "item1",
            city: "Martlock",

            recipe :{
                leather :0 ,
                metal_bar :12 ,
                plank :20 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        arcane_staff :{
            name : "Arcane Staff",
            id: "MAIN_ARCANESTAFF",
            type: "item1",
            city: "lymhurst",

            recipe :{
                leather :0 ,
                metal_bar :8 ,
                plank :16 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },


        great_arcane_staff :{
            name : "Great Arcane Staff",
            id: "2H_ARCANESTAFF",
            type: "item2",
            city: "Lymhurst",

            recipe :{
                leather :0 ,
                metal_bar :12 ,
                plank :20 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        enigmatic_staff :{
            name : "Enigmatic Staff",
            id: "2H_ENIGMATICSTAFF",
            type: "item2",
            city: "Lymhurst",

            recipe :{
                leather :0 ,
                metal_bar :20 ,
                plank :12 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        holy_staff :{
            name : "Holy Staff",
            id: "MAIN_HOLYSTAFF",
            type: "item2",
            city: "fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :16 ,
                cloth :8
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        great_holy_staff :{
            name : "Great Holy Staff",
            id: "2H_HOLYSTAFF",
            type: "item2",
            city: "Fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :20 ,
                cloth :12
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },



        divine_staff :{
            name : "Divine Staff",
            id: "2H_DIVINESTAFF",
            type: "item3",
            city: "Fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :20 ,
                cloth :12
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        fire_staff :{
            name : "Fire Staff",
            id: "MAIN_FIRESTAFF",
            type: "item3",
            city: "Thetford",

            recipe :{
                leather :0 ,
                metal_bar :8 ,
                plank :16 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        great_fire_staff :{
            name : "Great Fire Staff",
            id: "2H_FIRESTAFF",
            type: "item3",
            city: "Thetfort",

            recipe :{
                leather :0 ,
                metal_bar :20 ,
                plank :12 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        infernal_staff :{
            name : "Infernal Staff",
            id: "2H_INFERNOSTAFF",
            type: "item3",
            city: "Thetfort",

            recipe :{
                leather :0 ,
                metal_bar :12 ,
                plank :20 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },



        scholar_cowl :{
            name : "Scholar Cowl",
            id: "HEAD_CLOTH_SET1",
            type: "item4",
            city: "Thetfort",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :8
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        cleric_cowl :{
            name : "Cleric Cowl",
            id: "HEAD_CLOTH_SET2",
            type: "item4",
            city: "Thetfort",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :8
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        mage_cowl :{
            name : "Mage Cowl",
            id: "HEAD_CLOTH_SET3",
            type: "item4",
            city: "Thetfort",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :8
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        scholar_robe :{
            name : "Scholar Robe",
            id: "ARMOR_CLOTH_SET1",
            type: "item4",
            city: "Fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :16
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },



        cleric_robe :{
            name : "Cleric Robe",
            id: "ARMOR_CLOTH_SET2",
            type: "item5",
            city: "Fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :16
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        mage_robe :{
            name : "Mage Robe",
            id: "ARMOR_CLOTH_SET3",
            type: "item5",
            city: "Fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :16
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        scholar_sandals :{
            name : "Scholar Sandals",
            id: "SHOES_CLOTH_SET1",
            type: "item5",
            city: "BridgeWatch",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :8
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        cleric_sandals :{
            name : "Cleric Sandals",
            id: "SHOES_CLOTH_SET2",
            type: "item5",
            city: "BridgeWatch",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :8
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        mage_sandals :{
            name : "Mage Sandals",
            id: "SHOES_CLOTH_SET3",
            type: "item6",
            city: "BridgeWatch",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :8
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        torch :{
            name : "Torch",
            id: "OFF_TORCH",
            type: "item6",
            city: "Martlock",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :4 ,
                cloth :4
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        nature_staff :{
            name : "Nature Staff",
            id: "MAIN_NATURESTAFF",
            type: "item6",
            city: "Thetford",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :16 ,
                cloth :8
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        great_nature_staff :{
            name : "Great Nature Staff",
            id: "2H_NATURESTAFF",
            type: "item6",
            city: "thetford",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :20 ,
                cloth :12
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        wild_staff :{
            name : "Wild Staff",
            id: "2H_WILDSTAFF",
            type: "item7",
            city: "Thetford",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :20 ,
                cloth :12
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        quarterstaff :{
            name : "Quarterstaff",
            id: "2H_QUARTERSTAFF",
            type: "item7",
            city: "Martlock",

            recipe :{
                leather :20 ,
                metal_bar :12 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        iron_clad_staff :{
            name : "Iron-clad Staff",
            id: "2H_IRONCLADEDSTAFF",
            type: "item7",
            city: "Martlock",

            recipe :{
                leather :20 ,
                metal_bar :12 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        double_bladed_staff :{
            name : "Double Bladed Staff",
            id: "2H_DOUBLEBLADEDSTAFF",
            type: "item7",
            city: "Martlock",

            recipe :{
                leather :20 ,
                metal_bar :12 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        spear :{
            name : "Spear",
            id: "MAIN_SPEAR",
            type: "item8",
            city: "fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :8 ,
                plank :16 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        pike :{
            name : "Pike",
            id: "2H_SPEAR",
            type: "item8",
            city: "fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :12 ,
                plank :20 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        glaive :{
            name : "Glaive",
            id: "2H_GLAIVE",
            type: "item8",
            city: "fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :20 ,
                plank :12 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        dagger :{
            name : "Dagger",
            id: "MAIN_DAGGER",
            type: "item8",
            city: "bridgeWatch",

            recipe :{
                leather :12 ,
                metal_bar :12 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        dagger_pair :{
            name : "Dagger Pair",
            id: "2H_DAGGERPAIR",
            type: "item9",
            city: "bridgeWatch",

            recipe :{
                leather :16 ,
                metal_bar :16 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        claws :{
            name : "Claws",
            id: "2H_CLAWPAIR",
            type: "item9",
            city: "BridgeWatch",

            recipe :{
                leather :20 ,
                metal_bar :12 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        bow :{
            name : "Bow",
            id: "2H_BOW",
            type: "item9",
            city: "Lymhurst",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :32 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        warbow :{
            name : "Warbow",
            id: "2H_WARBOW",
            type: "item9",
            city: "Lymhurst",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :32 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        longbow :{
            name : "Longbow",
            id: "2H_LONGBOW",
            type: "item10",
            city: "Lymhurst",

            recipe :{
                leather :0 ,
                metal_bar :0 ,
                plank :32 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        mercenary_hood :{
            name : "Mercenary Hood",
            id: "HEAD_LEATHER_SET1",
            type: "item10",
            city: "Lymhurst",

            recipe :{
                leather :8 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        hunter_hood :{
            name : "Hunter Hood",
            id: "HEAD_LEATHER_SET2",
            type: "item10",
            city: "Lymhurst",

            recipe :{
                leather :8 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        assassin_hood :{
            name : "Assassin Hood",
            id: "HEAD_LEATHER_SET3",
            type: "item10",
            city: "Lymhurst",

            recipe :{
                leather :8 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        mercenary_jacket :{
            name : "Mercenary Jacket",
            id: "ARMOR_LEATHER_SET1",
            type: "item11",
            city: "thetford",

            recipe :{
                leather :16 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        hunter_jacket :{
            name : "Hunter Jacket",
            id: "ARMOR_LEATHER_SET2",
            type: "item11",
            city: "Thetford",

            recipe :{
                leather :16 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        assassin_jacket :{
            name : "Assassin Jacket",
            id: "ARMOR_LEATHER_SET3",
            type: "item11",
            city: "Thetford",

            recipe :{
                leather :16 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        mercenary_shoes :{
            name : "Mercenary Shoes",
            id: "SHOES_LEATHER_SET1",
            type: "item11",
            city: "lymhurst",

            recipe :{
                leather :8 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        hunter_shoes :{
            name : "Hunter Shoes",
            id: "SHOES_LEATHER_SET2",
            type: "item12",
            city: "Lymhurst",

            recipe :{
                leather :8 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        assassin_shoes :{
            name : "Assassin Shoes",
            id: "SHOES_LEATHER_SET3",
            type: "item12",
            city: "Lymhurst",

            recipe :{
                leather :8 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },




        shield :{
            name : "Shield",
            id: "OFF_SHIELD",
            type: "item13",
            city: "Martlock",

            recipe :{
                leather :0 ,
                metal_bar :4 ,
                plank :4 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        crossbow :{
            name : "Crossbow",
            id: "2H_CROSSBOW",
            type: "item13",
            city: "BridgeWatch",

            recipe :{
                leather :0 ,
                metal_bar :12 ,
                plank :20 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        heavy_crossbow :{
            name : "Heavy Crossbow",
            id: "2H_CROSSBOWLARGE",
            type: "item13",
            city: "BridgeWatch",

            recipe :{
                leather :0 ,
                metal_bar :12 ,
                plank :20 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        light_crossbow :{
            name : "Light Crossbow",
            id: "MAIN_1HCROSSBOW",
            type: "item13",
            city: "BridgeWatch",

            recipe :{
                leather :0 ,
                metal_bar :8 ,
                plank :16 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        brawler_gloves :{
            name : "Brawler Gloves",
            id: "2H_KNUCKLES_SET1",
            type: "item14",
            city: "Corleaon",

            recipe :{
                leather :20 ,
                metal_bar :12 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        battle_bracers :{
            name : "Battle Bracers",
            id: "2H_KNUCKLES_SET2",
            type: "item14",
            city: "Corleaon",

            recipe :{
                leather :20 ,
                metal_bar :12 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        spiked_gauntlets :{
            name : "Spiked Gauntlets",
            id: "2H_KNUCKLES_SET3",
            type: "item14",
            city: "Corleaon",

            recipe :{
                leather :20 ,
                metal_bar :12 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        hammer :{
            name : "Hammer",
            id: "MAIN_HAMMER",
            type: "item14",
            city: "Fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :24 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        polehammer :{
            name : "Polehammer",
            id: "2H_POLEHAMMER",
            type: "item15",
            city: "fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :20 ,
                plank :0 ,
                cloth :12
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        great_hammer :{
            name : "Great Hammer",
            id: "2H_HAMMER",
            type: "item15",
            city: "Fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :20 ,
                plank :0 ,
                cloth :12
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        mace :{
            name : "Mace",
            id: "MAIN_MACE",
            type: "item15",
            city: "thetford",

            recipe :{
                leather :0 ,
                metal_bar :16 ,
                plank :0 ,
                cloth :8
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        heavy_mace :{
            name : "Heavy Mace",
            id: "2H_MACE",
            type: "item15",
            city: "thetford",

            recipe :{
                leather :0 ,
                metal_bar :20 ,
                plank :0 ,
                cloth :12
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        morning_star :{
            name : "Morning Star",
            id: "2H_FLAIL",
            type: "item16",
            city: "thetford",

            recipe :{
                leather :0 ,
                metal_bar :20 ,
                plank :0 ,
                cloth :12
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        battleaxe :{
            name : "Battlexe",
            id: "MAIN_AXE",
            type: "item16",
            city: "Martlock",

            recipe :{
                leather :0 ,
                metal_bar :16 ,
                plank :8 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        greataxe :{
            name : "Greataxe",
            id: "2H_AXE",
            type: "item16",
            city: "martlock",

            recipe :{
                leather :0 ,
                metal_bar :20 ,
                plank :12 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        halberd :{
            name : "Halberd",
            id: "2H_HALBERD",
            type: "item16",
            city: "Martlock",

            recipe :{
                leather :0 ,
                metal_bar :12 ,
                plank :20 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        broadsword :{
            name : "Broadsword",
            id: "MAIN_SWORD",
            type: "item17",
            city: "Lymhurst",

            recipe :{
                leather :8 ,
                metal_bar :16 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        claymore :{
            name : "Claymore",
            id: "2H_CLAYMORE",
            type: "item17",
            city: "Lymhurst",

            recipe :{
                leather :12 ,
                metal_bar :20 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        dual_sword :{
            name : "Dual Swords",
            id: "2H_DUALSWORD",
            type: "item17",
            city: "Lymhurst",

            recipe :{
                leather :12 ,
                metal_bar :20 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        soldier_helmet :{
            name : "Soldier Helmet",
            id: "HEAD_PLATE_SET1",
            type: "item17",
            city: "Fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :8 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        knight_helmet :{
            name : "Knight Helmet",
            id: "HEAD_PLATE_SET2",
            type: "item18",
            city: "Fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :8 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        guardian_helmet :{
            name : "Guardian Helmet",
            id: "HEAD_PLATE_SET3",
            type: "item18",
            city: "Fortsterling",

            recipe :{
                leather :0 ,
                metal_bar :8 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        soldier_armor :{
            name : "Soldier Armor",
            id: "ARMOR_PLATE_SET1",
            type: "item18",
            city: "bridgewatch",

            recipe :{
                leather :0 ,
                metal_bar :16 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        knight_armor :{
            name : "Knight Armor",
            id: "ARMOR_PLATE_SET2",
            type: "item18",
            city: "BridgeWatch",

            recipe :{
                leather :0 ,
                metal_bar :16 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        guardian_armor :{
            name : "Guardian Armor",
            id: "ARMOR_PLATE_SET3",
            type: "item19",
            city: "BridgeWatch",

            recipe :{
                leather :0 ,
                metal_bar :16 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        soldier_boots :{
            name : "Soldier Boots",
            id: "SHOES_PLATE_SET1",
            type: "item19",
            city: "Martlock",

            recipe :{
                leather :0 ,
                metal_bar :8 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        knight_boots :{
            name : "Knight Boots",
            id: "SHOES_PLATE_SET2",
            type: "item19",
            city: "Martlock",

            recipe :{
                leather :0 ,
                metal_bar :8 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        guardian_boots :{
            name : "Guardian Boots",
            id: "SHOES_PLATE_SET3",
            type: "item19",
            city: "Martlock",

            recipe :{
                leather :0 ,
                metal_bar :8 ,
                plank :0 ,
                cloth :0
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        bag :{
            name : "Bag",
            id: "BAG",
            type: "item20",
            city: "corleaon",

            recipe :{
                leather :8 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :8
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },

        cape :{
            name : "Cape",
            id: "CAPE",
            type: "item20",
            city: "corleaon",

            recipe :{
                leather :4 ,
                metal_bar :0 ,
                plank :0 ,
                cloth :4
            },

            cost:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            },

            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },





        leather :{
            name : "Leather",
            id: "LEATHER",
            type: "material",
            city: "NONE",


            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },


        cloth :{
            name : "cloth",
            id: "CLOTH",
            type: "material",
            city: "NONE",


            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },


        metal_bar :{
            name : "Metal Bar",
            id: "METALBAR",
            type: "material",
            city: "NONE",


            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },


        plank :{
            name : "Planks",
            id: "PLANKS",
            type: "material",
            city: "NONE",


            price:{
                T4:[0,0,0,0],
                T5:[0,0,0,0],
                T6:[0,0,0,0],
                T7:[0,0,0,0],
                T8:[0,0,0,0]
            }
            
        },




};





function string_for_items_creating(mode){
let string_to_return = "";
    if(mode === "item"){

        for(let key in items_object){
            let item_object = items_object[key];
            if(item_object.type === "item"){

                for(let i = 4; i <= 8; i++){
                    string_to_return += `T${i}_${item_object.id},`;
                    for(let j =1; j <= 3; j++){
                        string_to_return += `T${i}_${item_object.id}@${j},`;
                    }
                }
            }
        }

    }

    for(let l = 1; l < number_of_item_groups; l++){
        
        if(mode === `item${l}`){

        for(let key in items_object){
            let item_object = items_object[key];
            if(item_object.type === `item${l}`){

                for(let i = 4; i <= 8; i++){
                    string_to_return += `T${i}_${item_object.id},`;
                    for(let j =1; j <= 3; j++){
                        string_to_return += `T${i}_${item_object.id}@${j},`;
                    }
                }
            }
        }

    }
    }

    if(mode === "material"){

        for(let key in items_object){
            let item_object = items_object[key];
            if(item_object.type === "material"){

                for(let i = 4; i <= 8; i++){
                    string_to_return += `T${i}_${item_object.id},`;
                    for(let j =1; j <= 3; j++){
                        string_to_return += `T${i}_${item_object.id}_LEVEL${j},`;
                    }
                }
            }
        }

    }
    
    let temp = string_to_return.lastIndexOf(",");

    string_to_return = string_to_return . slice(0 , temp);

    return string_to_return;
}




function making_url(server_name ,which_city ,string_for_items){
    //example url 
    //https://west.albion-online-data.com/api/v2/stats/prices/T4_BAG,T5_BAG?locations=Caerleon,Bridgewatch&qualities=2

    
    //bridgewatch ,thetford ,fortsterling ,lymhurst ,martlock

    //west ,east ,europe

    
    let url = `https://${server_name}.albion-online-data.com/api/v2/stats/prices/${string_for_items}?locations=${which_city}&qualities=1`
    //console.log(url);
    return url;
}

function enchantment_decider(data){

    let enchantment_tier;

        switch(true){

            case !((data).includes("@") || (data).includes("LEVEL")):

                enchantment_tier = 0;

            break;
            case ((data).includes("@1") || (data).includes("LEVEL1")):

                enchantment_tier = 1;

            break;
            case ((data).includes("@2") || (data).includes("LEVEL2")):

                enchantment_tier = 2;

            break;
            case ((data).includes("@3") || (data).includes("LEVEL3")):

                enchantment_tier = 3;

            break;
        }


    return enchantment_tier;
}


function tier_decider(data){

    let item_tier;

    switch(true){
        case data.includes("T4"):
            item_tier = 4;
        break;

        case data.includes("T5"):
            item_tier = 5;
        break;

        case data.includes("T6"):
            item_tier = 6;
        break;

        case data.includes("T7"):
            item_tier = 7;
        break;

        case data.includes("T8"):
            item_tier = 8;
        break;
    }

    return `T${item_tier}`;
}

async function calling_api(type_of_item){
    
    let recived_data;

    if(type_of_item.includes("item")){
    recived_data = await fetch (making_url(server, "BlackMarket", string_for_items_creating(type_of_item)) , {method: "GET"});
    recived_data = await recived_data.json();
    }
    else if(type_of_item.includes("material")){
    recived_data = await fetch (making_url(server, home_city, string_for_items_creating(type_of_item)) , {method: "GET"});
    recived_data = await recived_data.json();   
    }
    //console.log(recived_data);


    return recived_data;


}




function placing_data(recived_data){

       for(let key in recived_data){
       for(let data in items_object){

            
            if(recived_data[key].item_id.includes(items_object[data].id)){

                items_object[data].price[tier_decider(recived_data[key].item_id)][enchantment_decider(recived_data[key].item_id)] 
                = recived_data[key].sell_price_min;
                
            }

        }
    }

}


function crafting_cost(){

    for(item in items_object){
        if((items_object[item].type).includes("item")){
            for(let i = 4; i <= 8; i++){
                for(let j = 0; j <=3 ;j++){
                    if( (!(items_object[item].recipe.leather > 0) || (items_object.leather.price[`T${i}`][j] > 0)) &&
                        (!(items_object[item].recipe.cloth > 0) || (items_object.cloth.price[`T${i}`][j] > 0)) &&
                        (!(items_object[item].recipe.metal_bar > 0) || (items_object.metal_bar.price[`T${i}`][j] > 0)) &&
                        (!(items_object[item].recipe.plank > 0) || (items_object.plank.price[`T${i}`][j] > 0))){

                    items_object[item].cost[`T${i}`][j] = Math.round((items_object[item].recipe.leather* items_object.leather.price[`T${i}`][j] 
                    + items_object[item].recipe.cloth * items_object.cloth.price[`T${i}`][j]
                    +items_object[item].recipe.metal_bar * items_object.metal_bar.price[`T${i}`][j] 
                    + items_object[item].recipe.plank * items_object.plank.price[`T${i}`][j]) * ((100 - resourse_return_rate) / 100));
                    
                    }
                }
            }
        }
    }

}

let display_pannles;
let prices_div = document.getElementById("prices_div");

function display_profit(){
    let n = -1;
    display_pannles = [];
    for(let key in items_object){

        if(items_object[key].type.includes("item")){
            for(let i = 4; i <= 8; i++){
                for(let j =0; j <=3; j++){
                    if((items_object[key].cost[`T${i}`][j] * ((profit_margin + 100)/ 100) <= items_object[key].price[`T${i}`][j]) &&
                        items_object[key].cost[`T${i}`][j] > 0){
                            n += 1;              
                            // ====>

                            display_pannles[n] = document.createElement("h1");
                            display_pannles[n].textContent = `${items_object[key].name} ${i}.${j} Profit per => (${items_object[key].price[`T${i}`][j] - items_object[key].cost[`T${i}`][j]})
                            Cost Per => (${items_object[key].cost[`T${i}`][j]}) Crafting items needed for 1 : => [leather ${i}.${j} : ${items_object[key].recipe.leather}] and [Cloth ${i}.${j} : ${items_object[key].recipe.cloth}]
                            and [Metal Bar ${i}.${j} : ${items_object[key].recipe.metal_bar}] and [Planks ${i}.${j} : ${items_object[key].recipe.plank}] Prices of materials(don't pay more) => 
                            (leather ${i}.${j} : ${items_object["leather"].price[`T${i}`][j]}) ,
                            (Cloth ${i}.${j} : ${items_object["cloth"].price[`T${i}`][j]}) ,
                            (Metal Bar ${i}.${j} : ${items_object["metal_bar"].price[`T${i}`][j]}) ,
                            (Planks ${i}.${j} : ${items_object["plank"].price[`T${i}`][j]})`;

                            switch(true){
                                
                                case items_object[key].city.toUpperCase() === "Thetford".toUpperCase():
                                display_pannles[n].className = "pannels_class_thetford";
                                break;
                                case items_object[key].city.toUpperCase() === "Lymhurst".toUpperCase():
                                display_pannles[n].className = "pannels_class_lymhurst";
                                break;
                                case items_object[key].city.toUpperCase() === "Fortsterling".toUpperCase():
                                display_pannles[n].className = "pannels_class_fortsterling";
                                break;
                                case items_object[key].city.toUpperCase() === "Corleaon".toUpperCase():
                                display_pannles[n].className = "pannels_class_corleaon";
                                break;
                                case items_object[key].city.toUpperCase() === "Martlock".toUpperCase():
                                display_pannles[n].className = "pannels_class_martlock";
                                break;
                                case items_object[key].city.toUpperCase() === "Bridgewatch".toUpperCase():
                                display_pannles[n].className = "pannels_class_bridgewatch";
                                break;                                
                                
                                
                                default:
                                display_pannles[n].className = "pannels_class";
                            }
                            prices_div.append(display_pannles[n]);


                            // <====
                    }
                }
            }
        }

    }

}

async function main(){

let temp = "";
for(key in items_object){
    if(items_object[key].type.includes(`item`)){
        if(temp != items_object[key].type){
            temp = items_object[key].type;
            number_of_item_groups++;
        }
    }
}

alert(`Now please wait for the info to Load`);

let data = await calling_api("material");
placing_data(data);

data = await calling_api("item");

placing_data(data);


for(let i = 1; i < number_of_item_groups; i++){
    data = await calling_api(`item${i}`);
    placing_data(data);
}

placing_data(data);

crafting_cost();

display_profit();

alert(`Loaded Succesfully!!! please scroll down.`);



}

document.getElementById("submit_button").onclick = () => {
    profit_margin = Number(document.getElementById("profit_margin_inp").value);
    server = document.getElementById("server_inp").value;
    home_city = document.getElementById("city_inp").value;
    resourse_return_rate = Number(document.getElementById("resourse_return_rate_inp"). value);

    if(profit_margin > 0 && (server === "west" || server === "east" || server === "europe") &&
      (home_city === "thetford" || home_city === "martlock" || home_city === "bridgewatch" || home_city === "fortsterling" || home_city === "lymhurst")){
    main();
    }
    else{
        alert(`TRY ENTERING THE INFO THAT IS NEEDED CORRECTLY`);
    }
}

