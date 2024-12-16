// Load breed data (replace with JSON content from your uploaded file)
const breedData = [
    [
        {
            "Breed": "Affenpinscher",
            "HDB approved": "Yes",
            "Obedience": 37,
            "Longevity": 11.42,
            "Purchase Price": 510.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Afghan Hound",
            "HDB approved": "No",
            "Obedience": 80,
            "Longevity": 11.92,
            "Purchase Price": 890.0,
            "Food Costs": 709.7118328125,
            "Grooming": 1,
            "Suitability for children": 1
        },
        {
            "Breed": "Akita",
            "HDB approved": "No",
            "Obedience": 54,
            "Longevity": 10.16,
            "Purchase Price": 1201.5,
            "Food Costs": 709.7118328125,
            "Grooming": 2,
            "Suitability for children": 3
        },
        {
            "Breed": "Alaskan Malamute",
            "HDB approved": "No",
            "Obedience": 50,
            "Longevity": 10.67,
            "Purchase Price": 1209.5,
            "Food Costs": 709.7118328125,
            "Grooming": 1,
            "Suitability for children": 2
        },
        {
            "Breed": "Australian Cattle Dog",
            "HDB approved": "No",
            "Obedience": 10,
            "Longevity": 11.67,
            "Purchase Price": 530.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 3
        },
        {
            "Breed": "Australian Shepherd",
            "HDB approved": "No",
            "Obedience": 42,
            "Longevity": 12.28,
            "Purchase Price": 565.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Australian Terrier",
            "HDB approved": "Yes",
            "Obedience": 34,
            "Longevity": 11.05,
            "Purchase Price": 640.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Basenji",
            "HDB approved": "No",
            "Obedience": 79,
            "Longevity": 13.58,
            "Purchase Price": 940.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Basset Hound",
            "HDB approved": "No",
            "Obedience": 71,
            "Longevity": 11.43,
            "Purchase Price": 489.5,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Beagle",
            "HDB approved": "No",
            "Obedience": 73,
            "Longevity": 12.3,
            "Purchase Price": 287.5,
            "Food Costs": 324.439695,
            "Grooming": 1,
            "Suitability for children": 1
        },
        {
            "Breed": "Bedlington Terrier",
            "HDB approved": "No",
            "Obedience": 40,
            "Longevity": 13.51,
            "Purchase Price": 1058.33333333333,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Belgian Tervuren",
            "HDB approved": "No",
            "Obedience": 14,
            "Longevity": 10.6,
            "Purchase Price": 1070.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Bernese Mountain Dog",
            "HDB approved": "No",
            "Obedience": 22,
            "Longevity": 7.56,
            "Purchase Price": 1320.0,
            "Food Costs": 709.7118328125,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Bichon Frise",
            "HDB approved": "Yes",
            "Obedience": 45,
            "Longevity": 12.21,
            "Purchase Price": 692.5,
            "Food Costs": 324.439695,
            "Grooming": 1,
            "Suitability for children": 1
        },
        {
            "Breed": "Bloodhound",
            "HDB approved": "No",
            "Obedience": 75,
            "Longevity": 6.75,
            "Purchase Price": 607.5,
            "Food Costs": 709.7118328125,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Border Collie",
            "HDB approved": "No",
            "Obedience": 1,
            "Longevity": 12.52,
            "Purchase Price": 622.5,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 3
        },
        {
            "Breed": "Border Terrier",
            "HDB approved": "Yes",
            "Obedience": 30,
            "Longevity": 14.0,
            "Purchase Price": 833.333333333333,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Borzoi",
            "HDB approved": "No",
            "Obedience": 76,
            "Longevity": 9.08,
            "Purchase Price": 675.0,
            "Food Costs": 466.3820615625,
            "Grooming": 1,
            "Suitability for children": 2
        },
        {
            "Breed": "Boston Terrier",
            "HDB approved": "Yes",
            "Obedience": 54,
            "Longevity": 10.92,
            "Purchase Price": 690.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Bouvier des Flandres",
            "HDB approved": "No",
            "Obedience": 29,
            "Longevity": 10.34,
            "Purchase Price": 1335.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Boxer",
            "HDB approved": "No",
            "Obedience": 48,
            "Longevity": 8.81,
            "Purchase Price": 700.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Briard",
            "HDB approved": "No",
            "Obedience": 30,
            "Longevity": 11.17,
            "Purchase Price": 650.0,
            "Food Costs": 466.3820615625,
            "Grooming": 1,
            "Suitability for children": 1
        },
        {
            "Breed": "Brittany",
            "HDB approved": "No",
            "Obedience": 19,
            "Longevity": 12.92,
            "Purchase Price": 617.5,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Brussels Griffon",
            "HDB approved": "Yes",
            "Obedience": 59,
            "Longevity": 12.0,
            "Purchase Price": 832.5,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 3
        },
        {
            "Breed": "Bull Terrier",
            "HDB approved": "No",
            "Obedience": 66,
            "Longevity": 10.21,
            "Purchase Price": 1085.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Bulldog",
            "HDB approved": "No",
            "Obedience": 78,
            "Longevity": 6.29,
            "Purchase Price": 2680.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Bullmastiff",
            "HDB approved": "No",
            "Obedience": 69,
            "Longevity": 7.57,
            "Purchase Price": 980.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Cairn Terrier",
            "HDB approved": "Yes",
            "Obedience": 35,
            "Longevity": 13.84,
            "Purchase Price": 435.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Cavalier King Charles Spaniel",
            "HDB approved": "Yes",
            "Obedience": 44,
            "Longevity": 11.29,
            "Purchase Price": 1016.55555555556,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Chesapeake Bay Retriever",
            "HDB approved": "No",
            "Obedience": 27,
            "Longevity": 9.48,
            "Purchase Price": 522.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Chihuahua",
            "HDB approved": "Yes",
            "Obedience": 67,
            "Longevity": 16.5,
            "Purchase Price": 587.5,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 3
        },
        {
            "Breed": "Chow Chow",
            "HDB approved": "No",
            "Obedience": 77,
            "Longevity": 9.01,
            "Purchase Price": 515.0,
            "Food Costs": 466.3820615625,
            "Grooming": 1,
            "Suitability for children": 2
        },
        {
            "Breed": "Clumber Spaniel",
            "HDB approved": "No",
            "Obedience": 37,
            "Longevity": 10.0,
            "Purchase Price": 1033.33333333333,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Cocker Spaniel",
            "HDB approved": "No",
            "Obedience": 20,
            "Longevity": 12.5,
            "Purchase Price": 465.0,
            "Food Costs": 674.328965625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Dachshund",
            "HDB approved": "Yes",
            "Obedience": 49,
            "Longevity": 12.63,
            "Purchase Price": 422.5,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 3
        },
        {
            "Breed": "Dalmatian",
            "HDB approved": "No",
            "Obedience": 39,
            "Longevity": 11.27,
            "Purchase Price": 695.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Dandie Dinmont Terrier",
            "HDB approved": "Yes",
            "Obedience": 62,
            "Longevity": 12.17,
            "Purchase Price": 925.0,
            "Food Costs": 466.3820615625,
            "Grooming": 1,
            "Suitability for children": 1
        },
        {
            "Breed": "Doberman Pinscher",
            "HDB approved": "No",
            "Obedience": 5,
            "Longevity": 10.33,
            "Purchase Price": 789.5,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "English Cocker Spaniel",
            "HDB approved": "No",
            "Obedience": 18,
            "Longevity": 11.66,
            "Purchase Price": 800.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "English Setter",
            "HDB approved": "No",
            "Obedience": 37,
            "Longevity": 11.57,
            "Purchase Price": 615.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "English Springer Spaniel",
            "HDB approved": "No",
            "Obedience": 13,
            "Longevity": 12.54,
            "Purchase Price": 615.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "English Toy Spaniel",
            "HDB approved": "Yes",
            "Obedience": 45,
            "Longevity": 10.1,
            "Purchase Price": 925.0,
            "Food Costs": 404.597379375,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Flat-Coated Retriever",
            "HDB approved": "No",
            "Obedience": 18,
            "Longevity": 9.02,
            "Purchase Price": 600.0,
            "Food Costs": 466.3820615625,
            "Grooming": 1,
            "Suitability for children": 1
        },
        {
            "Breed": "French Bulldog",
            "HDB approved": "No",
            "Obedience": 58,
            "Longevity": 9.0,
            "Purchase Price": 1900.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "German Shepherd",
            "HDB approved": "No",
            "Obedience": 3,
            "Longevity": 9.73,
            "Purchase Price": 819.5,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "German Shorthaired Pointer",
            "HDB approved": "No",
            "Obedience": 17,
            "Longevity": 11.46,
            "Purchase Price": 545.0,
            "Food Costs": 971.0337105,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Giant Schnauzer",
            "HDB approved": "No",
            "Obedience": 28,
            "Longevity": 10.0,
            "Purchase Price": 810.0,
            "Food Costs": 1348.65793125,
            "Grooming": 1,
            "Suitability for children": 2
        },
        {
            "Breed": "Golden Retriever",
            "HDB approved": "No",
            "Obedience": 4,
            "Longevity": 12.04,
            "Purchase Price": 958.333333333333,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Gordon Setter",
            "HDB approved": "No",
            "Obedience": 34,
            "Longevity": 11.1,
            "Purchase Price": 700.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Great Dane",
            "HDB approved": "No",
            "Obedience": 48,
            "Longevity": 6.96,
            "Purchase Price": 1040.0,
            "Food Costs": 709.7118328125,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Greyhound",
            "HDB approved": "No",
            "Obedience": 46,
            "Longevity": 9.36,
            "Purchase Price": 1175.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Irish Setter",
            "HDB approved": "No",
            "Obedience": 35,
            "Longevity": 11.63,
            "Purchase Price": 525.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Irish Wolfhound",
            "HDB approved": "No",
            "Obedience": 41,
            "Longevity": 6.94,
            "Purchase Price": 1333.33333333333,
            "Food Costs": 1216.64885625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Italian Greyhound",
            "HDB approved": "Yes",
            "Obedience": 60,
            "Longevity": 10.02,
            "Purchase Price": 800.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 3
        },
        {
            "Breed": "Kerry Blue Terrier",
            "HDB approved": "No",
            "Obedience": 35,
            "Longevity": 9.4,
            "Purchase Price": 1200.0,
            "Food Costs": 466.3820615625,
            "Grooming": 1,
            "Suitability for children": 2
        },
        {
            "Breed": "Labrador Retriever",
            "HDB approved": "No",
            "Obedience": 7,
            "Longevity": 12.04,
            "Purchase Price": 809.9,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Lhasa Apso",
            "HDB approved": "Yes",
            "Obedience": 68,
            "Longevity": 13.92,
            "Purchase Price": 350.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Maltese",
            "HDB approved": "Yes",
            "Obedience": 59,
            "Longevity": 12.25,
            "Purchase Price": 649.5,
            "Food Costs": 269.73158625,
            "Grooming": 1,
            "Suitability for children": 3
        },
        {
            "Breed": "Mastiff",
            "HDB approved": "No",
            "Obedience": 72,
            "Longevity": 6.5,
            "Purchase Price": 900.0,
            "Food Costs": 701.30212425,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Miniature Schnauzer",
            "HDB approved": "Yes",
            "Obedience": 12,
            "Longevity": 11.81,
            "Purchase Price": 714.5,
            "Food Costs": 404.597379375,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Newfoundland",
            "HDB approved": "No",
            "Obedience": 34,
            "Longevity": 9.32,
            "Purchase Price": 1177.5,
            "Food Costs": 709.7118328125,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Norfolk Terrier",
            "HDB approved": "Yes",
            "Obedience": 56,
            "Longevity": 13.07,
            "Purchase Price": 2083.33333333333,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Old English Sheepdog",
            "HDB approved": "No",
            "Obedience": 63,
            "Longevity": 11.19,
            "Purchase Price": 831.5,
            "Food Costs": 709.7118328125,
            "Grooming": 1,
            "Suitability for children": 1
        },
        {
            "Breed": "Papillon",
            "HDB approved": "Yes",
            "Obedience": 8,
            "Longevity": 13.0,
            "Purchase Price": 740.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Pekingese",
            "HDB approved": "No",
            "Obedience": 74,
            "Longevity": 11.56,
            "Purchase Price": 885.0,
            "Food Costs": 466.3820615625,
            "Grooming": 1,
            "Suitability for children": 2
        },
        {
            "Breed": "Pembroke Welsh Corgi",
            "HDB approved": "No",
            "Obedience": 11,
            "Longevity": 12.25,
            "Purchase Price": 586.5,
            "Food Costs": 674.328965625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Pharaoh Hound",
            "HDB approved": "No",
            "Obedience": 37,
            "Longevity": 11.83,
            "Purchase Price": 912.5,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Pointer",
            "HDB approved": "No",
            "Obedience": 43,
            "Longevity": 12.42,
            "Purchase Price": 293.75,
            "Food Costs": 709.7118328125,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Pomeranian",
            "HDB approved": "Yes",
            "Obedience": 23,
            "Longevity": 9.67,
            "Purchase Price": 670.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Poodle",
            "HDB approved": "Yes",
            "Obedience": 2,
            "Longevity": 11.95,
            "Purchase Price": 900.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Pug",
            "HDB approved": "Yes",
            "Obedience": 57,
            "Longevity": 11.0,
            "Purchase Price": 469.4,
            "Food Costs": 404.597379375,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Rhodesian Ridgeback",
            "HDB approved": "No",
            "Obedience": 52,
            "Longevity": 9.1,
            "Purchase Price": 995.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Rottweiler",
            "HDB approved": "No",
            "Obedience": 9,
            "Longevity": 9.11,
            "Purchase Price": 1117.5,
            "Food Costs": 709.7118328125,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Saint Bernard",
            "HDB approved": "No",
            "Obedience": 65,
            "Longevity": 7.78,
            "Purchase Price": 875.0,
            "Food Costs": 1216.64885625,
            "Grooming": 1,
            "Suitability for children": 1
        },
        {
            "Breed": "Saluki",
            "HDB approved": "No",
            "Obedience": 43,
            "Longevity": 12.0,
            "Purchase Price": 1525.0,
            "Food Costs": 709.7118328125,
            "Grooming": 1,
            "Suitability for children": 1
        },
        {
            "Breed": "Samoyed",
            "HDB approved": "No",
            "Obedience": 33,
            "Longevity": 12.44,
            "Purchase Price": 1162.0,
            "Food Costs": 709.7118328125,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Scottish Terrier",
            "HDB approved": "Yes",
            "Obedience": 65,
            "Longevity": 10.69,
            "Purchase Price": 829.0,
            "Food Costs": 324.439695,
            "Grooming": 1,
            "Suitability for children": 2
        },
        {
            "Breed": "Shetland Sheepdog",
            "HDB approved": "Yes",
            "Obedience": 6,
            "Longevity": 12.53,
            "Purchase Price": 465.0,
            "Food Costs": 404.597379375,
            "Grooming": 1,
            "Suitability for children": 1
        },
        {
            "Breed": "Shih Tzu",
            "HDB approved": "Yes",
            "Obedience": 70,
            "Longevity": 13.2,
            "Purchase Price": 582.5,
            "Food Costs": 324.439695,
            "Grooming": 1,
            "Suitability for children": 1
        },
        {
            "Breed": "Siberian Husky",
            "HDB approved": "No",
            "Obedience": 45,
            "Longevity": 12.58,
            "Purchase Price": 650.0,
            "Food Costs": 466.3820615625,
            "Grooming": 3,
            "Suitability for children": 1
        },
        {
            "Breed": "Staffordshire Bull Terrier",
            "HDB approved": "No",
            "Obedience": 49,
            "Longevity": 12.05,
            "Purchase Price": 1144.9,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Tibetan Spaniel",
            "HDB approved": "Yes",
            "Obedience": 46,
            "Longevity": 14.42,
            "Purchase Price": 1050.0,
            "Food Costs": 466.3820615625,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Tibetan Terrier",
            "HDB approved": "No",
            "Obedience": 62,
            "Longevity": 12.31,
            "Purchase Price": 1140.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Welsh Springer Spaniel",
            "HDB approved": "No",
            "Obedience": 31,
            "Longevity": 12.49,
            "Purchase Price": 750.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "West Highland White Terrier",
            "HDB approved": "Yes",
            "Obedience": 47,
            "Longevity": 12.8,
            "Purchase Price": 537.5,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 1
        },
        {
            "Breed": "Whippet",
            "HDB approved": "No",
            "Obedience": 51,
            "Longevity": 12.87,
            "Purchase Price": 915.0,
            "Food Costs": 324.439695,
            "Grooming": 2,
            "Suitability for children": 2
        },
        {
            "Breed": "Yorkshire Terrier",
            "HDB approved": "Yes",
            "Obedience": 27,
            "Longevity": 12.6,
            "Purchase Price": 1057.0,
            "Food Costs": 324.439695,
            "Grooming": 1,
            "Suitability for children": 3
        }
    ]
];

// Collect user answers
let userAnswers = {
    trainability: 5,
    longevity: 10,
    initialCost: 5000,
    foodCost: 1000,
    grooming: 2,
    children: "yes", // Matching the "yes"/"no" format in the data
    hdb: "Yes", // Ensure this matches "Yes"/"No" in the breed data
};

function updateGroomingLabel() {
    const groomingInput = document.getElementById("grooming");
    const groomingLabel = document.getElementById("groomingLabel");

    // Define the text labels corresponding to each numerical value
    const labels = {
        1: "Every day",
        2: "Every week",
        3: "Every few weeks"
    };

    // Update the text label
    groomingLabel.textContent = labels[groomingInput.value];

    // Update the userAnswers object with the numerical value
    userAnswers.grooming = parseInt(groomingInput.value, 10);
}

// Update the value displayed next to the range input
function updateValue(id) {
    const value = document.getElementById(id).value;
    document.getElementById(id + "Value").textContent = value;
    userAnswers[id] = id === "children" || id === "hdb" ? value : parseInt(value, 10);
}

// Submit Quiz
function submitQuiz() {
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";

    // Filter breeds based on HDB approval and suitability for children (if applicable)
    let filteredBreeds = breedData[0].filter(breed => {
        // Filter based on HDB approval
        const hdbCondition = (userAnswers.hdb === "Yes" ? breed["HDB approved"] === "Yes" : true);
    
        // Filter based on high suitability for children
        const childrenCondition = (userAnswers.children === "yes" ? breed["Suitability for children"] === 1 : true);
    
        // Only include the breed if both conditions are satisfied
        return hdbCondition && childrenCondition;
    });
    

    // Map filtered breeds with scores
    let matches = filteredBreeds.map(breed => {
        let score = 0;
        
        // Invert the user score to align with breed's obedience scale
        let invertedTrainability = 11 - userAnswers.trainability; // Inverts the scale
        // Normalize the inverted user score to match the breed's obedience scale (1 to 80)
        let normalizedTrainability = invertedTrainability * 8;
        // Calculate the score
        score += Math.abs(breed.Obedience - normalizedTrainability);

        // Normalize the user's lifespan preference (1–10) to the breed's lifespan scale (6–17)
        let normalizedLifespan = 6 + ((userAnswers.longevity - 1) * (17 - 6)) / 9;

        // Calculate the score
        if (breed.Longevity < normalizedLifespan) {
            // If the breed's longevity is less than the user's preferred minimum lifespan, apply a penalty
            score += (normalizedLifespan - breed.Longevity) * 2; // You can adjust the multiplier for more weight
        } else {
            // If the breed's longevity is equal to or greater than the user's preference, no penalty
            score += Math.abs(breed.Longevity - normalizedLifespan); // Distance from the user's preference, lower is better
        }

        // Normalize the user's price tolerance to the breed's price range (0 to 3000)
        let maxPriceTolerance = ((userAnswers.initialCost - 250) / (3000 - 250)) * 3000;
        // Calculate the score for price tolerance
        // Apply linear scaling for penalties based on how much the price exceeds the user's max tolerance
        let priceDifference = breed["Purchase Price"] - maxPriceTolerance;
        if (priceDifference > 0) {
            score += priceDifference / 1000; // Applying a lighter penalty based on the difference
        } else {
            score += 0; // No penalty if within tolerance
        }

        // Fix: Define the maxFoodCostTolerance variable
        let maxFoodCostTolerance = ((userAnswers.foodCost - 250) / (1500 - 250)) * 1500;
        // Similarly for food costs
        let foodCostDifference = breed["Food Costs"] - maxFoodCostTolerance;
        if (foodCostDifference > 0) {
            score += foodCostDifference / 100; // Light penalty for exceeding food cost tolerance
        } else {
            score += 0; // No penalty if within tolerance
        }

        let groomingDifference = Math.abs(breed.Grooming - userAnswers.grooming);

        // Apply the following scoring rules:
        if (groomingDifference === 0) {
            score += 0; // Exact match (Ideal)
        } else if (groomingDifference === 1) {
            score += 1; // Close match (Small penalty)
        } else if (groomingDifference === 2) {
            score += 2; // Large difference (Larger penalty)
        }

        return { ...breed, score }; // Include score for sorting
    });

    // Sort by score (lower is better)
    matches.sort((a, b) => a.score - b.score);

    // Display top 3 results
    displayResults(matches.slice(0, 3));
}
// Display Results
function displayResults(topBreeds) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = '';

    const groomingLabels = {
        1: "Every day",
        2: "Every week",
        3: "Every few weeks"
    };

    topBreeds.forEach(breed => {
        const breedElement = document.createElement("div");
        breedElement.className = "breed-card";

        breedElement.innerHTML = `
            <h3>${breed.Breed}</h3>
            <div>
                <label>Difficulty in Training:</label>
                <progress value="${breed.Obedience}" max="80"></progress> (${breed.Obedience} out of 80)
            </div>
            <div>
                <label>Longevity:</label>
                <progress value="${Math.round(breed.Longevity)}" max="17"></progress> (${Math.round(breed.Longevity)} years)
            </div>
            <div>
                <label>Average Purchase Price:</label>
                <progress value="${Math.round(breed["Purchase Price"])}" max="2700"></progress> ($${Math.round(breed["Purchase Price"])})
            </div>
            <div>
                <label>Average Food Costs per year:</label>
                <progress value="${Math.round(breed["Food Costs"])}" max="1500"></progress> ($${Math.round(breed["Food Costs"])})
            </div>
            <div>
                <label>Grooming Needs:</label>
                <progress value="${breed.Grooming}" max="3"></progress> (${groomingLabels[breed.Grooming] || "Unknown"})
            </div>
        `;
        resultsContainer.appendChild(breedElement);
    });
}


function nextQuestion(currentQuestionNumber) {
    // Get the current question and hide it
    const currentQuestion = document.getElementById("question" + currentQuestionNumber);
    if (currentQuestion) {
        currentQuestion.style.display = "none";
    }

    // Show the next question
    const nextQuestion = document.getElementById("question" + (currentQuestionNumber + 1));
    if (nextQuestion) {
        nextQuestion.style.display = "block";
    } else {
        // If no more questions, show the submit button
        document.getElementById("submitBtnContainer").style.display = "block";
    }
}