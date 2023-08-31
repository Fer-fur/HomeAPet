// A file to store all the webpage content or links that are constant.

// Nav Bar Links
export const navbar_links = [
    {
        url: '/adoption',
        title: 'Adoption',
        textColour: 'text-primary-green'
    },
    {
        url: '/rehoming',
        title: 'Rehoming',
        textColour: 'text-primary-blue'
    },
    {
        url: '/volunteer',
        title: 'Volunteer',
        textColour: 'text-orange-500'
    },
]

// Footer links
export const footer_links = [
    {
        section_title: 'About',
        links: [
            {
                title: 'Adoption Fee information',
                url: '/'
            },
            {
                title: 'Partnership',
                url: '/'
            },
            {
                title: 'Adoption Procedures',
                url: '/'
            },
            {
                title: 'Rehoming Procedures',
                url: '/'
            }
        ]
    },
    {
        section_title: 'Articles',
        links: [
            {
                title: 'Ownership Responsibilities',
                url: '/'
            },
            {
                title: 'Ownership Costs',
                url: '/'
            }
        ]
    },
]

// Feature Card Content 
export const feature_card_content = [
    {
        icon_src : '/pet-form.png',
        icon_alt : 'web page display pets for adoption',
        title: 'Streamlined Rehoming Listing Services',
        subtitle: 'Spend no more than 3 minutes to complete the listing process, from account creation to listing your pet for adoption.'
    },
    {
        icon_src : '/pet-box.png',
        icon_alt : 'pet box',
        title: 'Adoption services',
        subtitle: 'Find a furry friend here for an affordable fixed adoption fee. All the necessary listed pet information are available for perusal.'
    },
    {
        icon_src : '/volunteer-pet.png',
        icon_alt : 'Volunteer with pet',
        title: 'Voluntary Services',
        subtitle: 'Sign up to help educate and guide first time pet owners on how to better care for their new / adopted pets via house vists.'
    },
]

export const aboutUs_card_content = [
    {
        title: 'Our Story',
        subtitle: 'Pets are always considered to be human\'s best friends and more often than not, our family. Although we love them unconditionally, sometimes due to unforseen circumstances, we can no longer provide and care for them as we once did. This was why HomeAPet was created.',
        extra_subtitle: 'We are a platform that connects pet owners with potential adopters. Our goal is to help these loving pets find a lovely home that not only needs them and can afford to provide for them.',
        img_src: "/mission-photo.jpg",
        img_alt: "Lady holding a dog",
    },
    {
        title: 'Our Mission',
        subtitle: 'We aim to be the leading platform for pet adoption services ranging from Adoption to Rehoming services.',
        extra_subtitle: 'By providing a platform to allow pet owners to connect with potential and responsible pet adopters, we hope to reduce the increasing number of yearly pet abandonment cases.',
        img_src: "/mission-photo-2.jpg",
        img_alt: "Statistic Report",
    },
    {
        title: 'Our Partners',
        subtitle: 'We partnered with local reputable animal shelters to provide the latest updates on responsible pet ownership and proper animal care articles for pet owners to learn from.',
        extra_subtitle: 'We are always looking for volunteers to partner with us to help us conduct home visits to advise and ensure that the newly adopted pets are adapting comfortably to their new home.',
        img_src: "/partners-photo.jpg",
        img_alt: "Partnership Photo",
    },
]

export const FAQ_content = [
    {
        question: 'How to list a pet for adoption?',
        answer: 'Navigate to the Rehoming, and create an account then fill in the necessary information in the form and the listing will appear in the gallery.'
    },
    {
        question: 'How to adopt a pet?',
        answer: 'View the available pets via the gallery to find your best furry friend.'
    },
]

// Gallery Cards, will change to db
export const GalleryCard = [
    {
        id: 1,
        image_src: '/corgi-1.jpg',
        name: 'Tubby',
        breed: 'Corgi',
        age: "2+",
        gender: 'Male',
        fee: 50
    },
    {
        id: 2,
        image_src: '/munchkin-1.jpg',
        name: 'Burger',
        breed: 'Munchkin',
        age: "3+",
        gender: 'Female',
        fee: 30
    },
    {
        id: 3,
        image_src: '/munchkin-1.jpg',
        name: 'Burger',
        breed: 'Munchkin',
        age: "3+",
        gender: 'Female',
        fee: 30
    },
    {
        id: 4,
        image_src: '/munchkin-1.jpg',
        name: 'Burger',
        breed: 'Munchkin',
        age: "3+",
        gender: 'F',
        fee: 30
    },
    {
        id: 5,
        image_src: '/munchkin-1.jpg',
        name: 'Burger',
        breed: 'Munchkin',
        age: "3+",
        gender: 'F',
        fee: 30
    },
    {
        id: 6,
        image_src: '/munchkin-1.jpg',
        name: 'Burger',
        breed: 'Munchkin',
        age: "3+",
        gender: 'F',
        fee: 30
    },
]