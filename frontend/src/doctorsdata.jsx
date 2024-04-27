const hospitaldata = [
    { 
        name: 'Evercare Hospital Lekki', 
        location: '1, Admiralty Way, Bisola Durosinmi Etti Dr, Lekki Phase 1, Lagos, Nigeria', 
        phoneNumber: '+234 813 985 0710', 
        googleMapLink: 'https://www.google.com/maps/dir//1,+Admiralty+Way,+Bisola+Durosinmi+Etti+Dr,+Lekki+Phase+1,+Lagos,+Nigeria/@6.4375798,3.3750531,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103bf59dbb289aad:0x1d5926cc121da888!2m2!1d3.457455!2d6.4375864?entry=ttu', 
        facilities: ['Emergency Services', 'Surgery', 'Laboratory Services', 'Radiology', 'Pharmacy', 'Maternity Care']
    },
    { 
        name: 'Lagoon Hospitals', 
        location: '17, Marine Rd, Apapa, Lagos, Nigeria', 
        phoneNumber: '+234 1 463 7929', 
        googleMapLink: 'https://www.google.com/maps/place/Lagoon+Hospitals/@6.4477685,3.3651561,17z/data=!3m1!4b1!4m5!3m4!1s0x103b8f36c8efbe81:0x9a9b8d5d3f4d2a8d!8m2!3d6.4477685!4d3.3673448',
        facilities: ['Emergency Services', 'Radiology', 'Maternity Care', 'Pediatrics', 'Orthopedics', 'Pharmacy']
    },
    { 
        name: 'Reddington Hospital', 
        location: '12 Idowu Martins St, Victoria Island, Lagos, Nigeria', 
        phoneNumber: '+234 708 062 7097', 
        googleMapLink: 'https://www.google.com/maps/dir//12+Idowu+Martins+St,+Victoria+Island,+Lagos,+Nigeria/@6.4312667,3.4246353,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b8e5b87d2fc15:0x8025f3df084cf77a!2m2!1d3.4205721!2d6.4312734',
        facilities: ['Emergency Services', 'Surgery', 'Laboratory Services', 'Radiology', 'Cardiology', 'Neurology']
    },
    { 
        name: 'St. Nicholas Hospital', 
        location: '57, Campbell St, Lagos Island, Lagos, Nigeria', 
        phoneNumber: '+234 708 062 7097', 
        googleMapLink: 'https://www.google.com/maps/dir//57,+Campbell+St,+Lagos+Island,+Lagos,+Nigeria/@6.4596672,3.3944458,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b8c74662ec2f5:0x431855def76f36b9!2m2!1d3.4042666!2d6.4596743',
        facilities: ['Emergency Services', 'Surgery', 'Laboratory Services', 'Radiology', 'Maternity Care', 'Oncology']
    },
    { 
        name: 'Lagos University Teaching Hospital (LUTH)', 
        location: 'Idi-Araba, Surulere, Lagos, Nigeria', 
        phoneNumber: '+234 802 364 4440', 
        googleMapLink: 'https://www.google.com/maps/dir//Lagos+University+Teaching+Hospital,+Idi-Araba,+Surulere,+Lagos,+Nigeria/@6.5234947,3.3545791,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b918a5df0f8e1:0x7fdd5a62d5f24d3b!2m2!1d3.3506935!2d6.5235013',
        facilities: ['Emergency Services', 'Surgery', 'Laboratory Services', 'Radiology', 'Pediatrics', 'Obstetrics and Gynecology']
    },
    { 
        name: 'First Consultant Hospital', 
        location: '37, Awolowo Rd, Ikoyi, Lagos, Nigeria', 
        phoneNumber: '+234 909 992 2247', 
        googleMapLink: 'https://www.google.com/maps/dir//37+Awolowo+Rd,+Ikoyi,+Lagos,+Nigeria/@6.4470648,3.4246783,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b8e590bde7ab9:0x8c6d8f4f3822d2f5!2m2!1d3.4146697!2d6.4470721',
        facilities: ['Emergency Services', 'Surgery', 'Laboratory Services', 'Radiology', 'Cardiology', 'Nephrology']
    },
    { 
        name: 'Nigerian Navy Reference Hospital', 
        location: 'Navy Town, Ojo, Lagos, Nigeria', 
        phoneNumber: '+234 802 741 6213', 
        googleMapLink: 'https://www.google.com/maps/place/Nigerian+Navy+Reference+Hospital/@6.4615087,3.2116352,15z/data=!4m5!3m4!1s0x0:0x890a0d16e89bd6e7!8m2!3d6.4615087!4d3.2116352',
        facilities: ['Emergency Services', 'Surgery', 'Laboratory Services', 'Radiology', 'Orthopedics', 'Ophthalmology']
    },
    { 
        name: 'Island Maternity Hospital', 
        location: 'Lagos Island, Lagos, Nigeria', 
        phoneNumber: '+234 809 950 6611', 
        googleMapLink: 'https://www.google.com/maps/place/Island+Maternity+Hospital/@6.4600894,3.3873845,17z/data=!3m1!4b1!4m5!3m4!1s0x103b8c73100ab20b:0x52ea3e6aadb8bb9e!8m2!3d6.4600894!4d3.3895732',
        facilities: ['Maternity Carerics', 'Neonatal Intensive Care', 'Obstetrics and Gynecology', 'Nutrition Services', 'Family Planning']
    },
    { 
        name: 'Eko Hospital', 
        location: '31 Mobolaji Bank Anthony Way, Maryland, Lagos, Nigeria', 
        phoneNumber: '+234 1 271 8190', 
        googleMapLink: 'https://www.google.com/maps/dir//Eko+Hospital,+31+Mobolaji+Bank+Anthony+Way,+Maryland,+Lagos,+Nigeria/@6.5665205,3.3682556,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b92fb82eaa557:0x4295fc4d5b7d42e9!2m2!1d3.3800326!2d6.5665278',
        facilities: ['Emergency Services', 'Surgery', 'Laboratory Services', 'Radiology', 'Cardiology', 'Dermatology']
    },
    { 
        name: 'Reddington Hospital', 
        location: '39A Isaac John St, Ikeja GRA, Ikeja, Lagos, Nigeria', 
        phoneNumber: '+234 1 460 5670', 
        googleMapLink: 'https://www.google.com/maps/dir//39A+Isaac+John+St,+Ikeja+GRA,+Ikeja,+Lagos,+Nigeria/@6.5887689,3.3539536,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b9212d77b77e9:0x73dd3e3f4cd1e4f3!2m2!1d3.3556754!2d6.5887762',
        facilities: ['Emergency Services', 'Surgery', 'Laboratory Services', 'Radiology', 'Neurology', 'Endocrinology']
    }
];
