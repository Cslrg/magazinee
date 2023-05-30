<?php
/**
 * @return array
 */
function getCharacters()
{
    return [
        [
            "id" => 1,
            "name" => "Aang",
            "image" => "image/Aang1.png",
        ],
        [
            "id" => 2,
            "name" => "Katara",
            "image" => "image/Katara1.png",
        ],
        [
            "id" => 3,
            "name" => "Sokka",
            "image" => "image/Sokka1.png",
        ],
        [
            "id" => 4,
            "name" => "Yue",
            "image" => "image/Yue1.png",
        ],
        [
            "id" => 5,
            "name" => "Toph",
            "image" => "image/Toph1.png",
        ],
        [
            "id" => 6,
            "name" => "Iroh",
            "image" => "image/Iroh1.png",
        ],
        [
            "id" => 7,
            "name" => "Zuko",
            "image" => "image/Zuko1.png",
        ],
        [
            "id" => 8,
            "name" => "Azula",
            "image" => "image/Azula1.png",
        ],
        [
            "id" => 9,
            "name" => "Ozai",
            "image" => "image/Ozai1.png",
        ],
        [
            "id" => 10,
            "name" => "Appa",
            "image" => "image/Appa1.png",
        ],

    ];
}

/**
 * @param $id
 * @return mixed
 */
function getCharDetails($id)
{
    $tags = [
        1 => [
            "FightingStyles" => " Airbending, Earthbending, Firebending, Energybending",
            "extra" => ['Air Nomad', 'Southern Air Temple', 'male']
        ],
        2 => [
            "FightingStyles" => " Waterbending, Bloodbending",
            "extra" => ['Wolf Cove', 'Southern Water Tribe', 'female']
        ],
        3 => [
            "FightingStyles" => "Water Tribe Warrior style, Swordmanship",
            "extra" => ['Wolf Cove', 'Southern Water Tribe', 'male']
        ],
        4 => [
            "FightingStyles" => "Waterbending",
            "extra" => ['Nothern Water Tribe', 'Moon Spirit', 'female']
        ],
        5 => [
            "FightingStyles" => "Earthbending, Metalbending",
            "extra" => ['Gaoling', 'Earth Kingdom', 'female']
        ],
        6 => [
            "FightingStyles" => "Firebending",
            "extra" => ['Fire Nation Capital', 'Firebending instructor', 'male']
        ],
        7 => [
            "FightingStyles" => "Firebending",
            "extra" => ['Fire Kingdom', 'Prince', 'male']
        ],
        8 => [
            "FightingStyles" => "Firebending, Lightning generation",
            "extra" => ['Fire Kingdom', 'Princess', 'female']
        ],
        9 => [
            "FightingStyles" => "Air, Body Bulk, Tail",
            "extra" => ['Fire Kingdom', 'Fire Lord', 'male']
        ],
        10 => [
            "FightingStyles" => "Firebending, Lightning generation",
            "extra" => ['Eastern Air Temple', 'Sky Bison', 'male']
        ],

    ];

    return $tags[$id];
}