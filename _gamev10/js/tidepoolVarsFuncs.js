//
// California Rocky Reefs Tidepool Interactive.
//
//   coded by Jon Britton
//         AV&EE, California Academy of Sciences
//	
// Bring in the VARS, bring in the FUNCS
// 
//

var speciesList =  [["Black Turban", "reefer/BlackTurban.png", "Chlorostoma funebralis", "At low tide, black turban snails are pretty easy to spot grazing on seaweed in tidepools."],
				["Blue Top Snail", "reefer/BlueTop.png", "Chlorostoma brunnea", "Spotting the ridged shells of blue top snails requires a skilled observer!"],
				["Brown Turban", "reefer/BrownTurban.png", "Calliostoma ligatum", "Brown turban snails are a part of our fragile tidepool and kelp ecosystems."],
				["Angular unicorn", "reefer/AngularUnicorn.png", "Acanthinucella spirata", "Nice spotting! Very low tides can reveal Angular unicorn snails attached to the rocks."],
				["Rough limpet", "reefer/FingerLimpet.png", "Lottia scabra", "Limpets attach to tidepool rocks; this snail will filter feed when the tide is high and sea water returns."],
				["Leather star", "reefer/LeatherStar.png", "Dermasterias imbiricata", "These are one of several sea stars that are quite colorful - glad you spotted this one!"],
				["Dwarf mottled star", "reefer/DwarfMottledStar.png", "Henricia pumila", "Small sea star species can be hard to find where they cling to rocks in the mid-tide zone."],
				["Ochre sea star", "reefer/OchreSeaStar.png", "Pisaster ochraceus", "Volunteers monitor sea stars along our coast because they help shape the intertidal community. "],
				["Juvenile - Ochre sea star", "reefer/JuvenileOchreStar.png", "Pisaster ochraceus", "This is an exciting discovery, finding a young sea star may be a sign their population is returning."],
				["Spotted dorid", "reefer/LeatherStar.png", "Triopha maculate", "These colorful sea slugs graze on crusting colonies of moss animals in water-filled tidepools."],
				["Sea clown triopha", "reefer/LeatherStar.png", "Triopha catalinae", "This type of two-colored sea slug grazes on crusting colonies of moss animals in water filled tidepools. "],
				["Hopkin’s rose", "reefer/LeatherStar.png", "Okenia rosacea", "The bright colors of these and other sea slugs sends signals that warn potential predators not to eat them. "],
				["Opalescent nudibranch", "reefer/LeatherStar.png", "Hermissenda crassicornis", "These spectacular sea slugs eat hydroids, and can be eaten by predatory sea slugs."],
				["San Diego dorid", "reefer/LeatherStar.png", "Diaulula sandiegensis", "Sea slugs are shell-less mollusks. Colors of this species can vary based on the type of sponge it eats. "],
				["Sea Lemon", "reefer/SeaLemon.png", "Diaulula sandiegensis", "Colorful but fragile sea slugs or nudibranch can be found in water filled pools of the low-tide zone."],
				["Dog whelk", "reefer/BrownTurban.png", "Nucella sp.", "Nice spotting! Low tides can reveal dog whelks attached to the rocks."]
				];

var critterList    	=  [["Black Abalone", "reefer/TC_MatchImage_Snail_F_220px.png", "Haliotis cracherodii", "0"],
						["Wavy Turban",   "reefer/TC_MatchImage_Snail_G_220px.png", "Pomaulax gibberosus", "0"],
						["Rock Scallop",  "reefer/TC_MatchImage_Snail_H_220px.png", "Crassodoma gigantea", "0"],
						["Rough limpet", "reefer/TC_MatchImage_Snail_E_220px.png", "Lottia scabra", "1"],
						["Black turban snail", "reefer/TC_MatchImage_Snail_A_220px.png", "Chlorostoma funebralis", "1"],
						["Brown turban snail", "reefer/TC_MatchImage_Snail_B_220px.png", "Chlorostoma brunnea", "1"],
						["Blue top snail", "reefer/TC_MatchImage_Snail_C_220px.png", "Calliostoma ligatum", "1"],
						["Mossy chiton", "reefer/critMossyChiton.png", "Mopalia muscosa", "0"],
						["Black Abalone", "reefer/TC_MatchImage_Snail_F_220px.png", "Haliotis cracherodii", "0"],
						["Brown turban snail", "reefer/TC_MatchImage_Snail_B_220px.png", "Chlorostoma brunnea", "0"],
						["Angular unicorn", "reefer/TC_MatchImage_Snail_D_220px.png", "Acanthinucella spirata", "1"],
						["Black turban snail", "reefer/TC_MatchImage_Snail_A_220px.png", "Chlorostoma funebralis", "0"],
						["Leather star", "reefer/TC_MatchImage_Star_A_220px.png", "Dermasterias imbiricata", "1"],
						["Purple sea urchin", "reefer/TC_MatchImage_Star_E_220px.png", "Strongylocentrotus purpuratus", "0"],
						["Dwarf mottled star", "reefer/TC_MatchImage_Star_B_220px.png", "Henricia pumila", "0"],
						["Dwarf mottled star", "reefer/TC_MatchImage_Star_B_220px.png", "Henricia pumila", "1"],
						["Leather star", "reefer/TC_MatchImage_Star_A_220px.png", "Dermasterias imbiricata", "0"],
						["Ochre sea star", "reefer/TC_MatchImage_Star_C_220px.png", "Pisaster ochraceus", "0"],
						["Juvenile - Ochre sea star", "reefer/TC_MatchImage_Star_D_220px.png", "Pisaster ochraceus", "1"],
						["Giant green anemone", "reefer/TC_MatchImage_Star_F_220px.png", "Anthopleura xanthogrammica", "0"],
						["Ochre sea star", "reefer/TC_MatchImage_Star_C_220px.png", "Pisaster ochraceus", "1"],
						["Spotted dorid", "reefer/TC_MatchImage_Nudi_A_220px.png", "Triopha maculate", "1"],
						["Opalescent nudibranch", "reefer/TC_MatchImage_Nudi_D_220px.png", "Hermissenda crassicornis", "0"],
						["San Diego dorid", "reefer/TC_MatchImage_Nudi_E_220px.png", "Diaulula sandiegensis", "0"],
						["Sea clown triopha", "reefer/TC_MatchImage_Nudi_B_220px.png", "Triopha catalinae", "1"],
						["White dendronotus", "reefer/TC_MatchImage_Nudi_G_220px.png", "Dendronotus albus", "0"],
						["Sea lemon", "reefer/TC_MatchImage_Nudi_F_220px.png", "Peltodoris nobilis", "0"],
						["Hopkin’s rose", "reefer/TC_MatchImage_Nudi_C_220px.png", "Okenia rosacea", "1"],
						["Sea clown triopha", "reefer/TC_MatchImage_Nudi_B_220px.png", "Triopha catalinae", "0"],
						["Opalescent nudibranch", "reefer/TC_MatchImage_Nudi_D_220px.png", "Hermissenda crassicornis", "1"],
						["San Diego dorid", "reefer/TC_MatchImage_Nudi_E_220px.png", "Diaulula sandiegensis", "1"],
						["Hopkin’s rose", "reefer/TC_MatchImage_Nudi_C_220px.png", "Okenia rosacea", "0"],
						["Rough limpet", "reefer/TC_MatchImage_Snail_E_220px.png", "Lottia scabra", "0"],
						["Sea lemon", "reefer/TC_MatchImage_Nudi_F_220px.png", "Peltodoris nobilis", "1"],
						["Dog Whelk", "reefer/TC_MatchImage_Snail_D2_220px.png", "Nucella sp.", "1"],
						["Dog Whelk", "reefer/TC_MatchImage_Snail_D2_220px.png", "Nucella sp.", "0"]
						];

var iNatList    	=  [["wsparks242", "iNat/wsparks242.jpg", "Found 7 Ochre Stars at Muir Beach", "1000", "500"],
						["nudibranchmom",   "iNat/555423083_8082ea5b2b_s.jpg", "Found a brown sea lemon at Pillar Point", "1100", "600"],
						["Todakki", "iNat/469509092_c5c63ea05d_s.jpg", "Found a Hopkin's Rose", "900", "350"],
						["nudibranchmom", "iNat/468852317_56c35f40d3_s.jpg", "Found an Opalescent Nudibranch", "1100", "425"],
						["wsparks242", "iNat/wsparks242.jpg", "Found 7 Ochre Stars at Muir Beach", "800", "250"],
						["nudibranchmom",   "iNat/2403803113_c515929599_s.jpg", "Found a San Diego Dorid at Pillar Pt.", "1000", "500"],
					   ];
