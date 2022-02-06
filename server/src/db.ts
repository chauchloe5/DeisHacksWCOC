interface InonProfit {
    id: string,
    name: string,
    whoSwipedRight: string[],
    profile: {
        logo: string, // String is reference link to where logo is stored
        category: string[],
        specialty: string[],
        bio: string,
        website: string,
        primaryRepresentative: string,
        contactInfo: {
            email: string,
            phoneNumber: string,
            mailingAddress: string
        }
    }
    forum: string; // String is reference link to forum object
}

interface Icompany {
    id: string,
    name: string,
    logo: string,
    bio: string,
    swipedRightOn: string[], // non-profits that the company has swiped right on
}

export let companies: Icompany[] = [
    {
        id: 'mNTRMoUIXz',
        name: 'Waltham Chamber of Commerce',
        logo: 'String representation',
        bio: 'The Waltham Chamber of Commerce is an independent organization that represents the business community in the Waltham area and West Suburban region. There are nearly 600 business members who invest in the organization with their dollars, program ideas, and volunteer effort through committees and other related activities. In turn, the Chamber utilizes the investment to help business do business through local governmental affairs, state and federal legislative advocacy, public relations, economic and community development, business and educational programs, and a “voice for business."',
        swipedRightOn: []
    }
]

export let nonProfits: InonProfit[] = [
    {
        id: 'p0mJJV9sug',
        name: 'The Waltham Partnership for Youth',
        whoSwipedRight: [],
        profile: {
            logo: 'Waltham Partnership for Youth Logo',
            category: [
                'Human Services',
                'Educational'
            ],
            specialty: [
                'Youth Programs',
                'Internship Opportunities for Youth',
                'Teaching Social Justice'
            ],
            bio: 'WPY works to ensure that the wealth of resources in and around Waltham are available for the youth and families who need them most. We facilitate high-impact community partnerships that support health and wellness, leadership development, and economic opportunity for Waltham youth while working to address long-standing structural inequities.',
            website: 'http://www.walthampartnershipforyouth.org',
            primaryRepresentative: 'Kaytie Dowcett',
            contactInfo: {
                email: 'info@walthampartnershipforyouth.org',
                phoneNumber: '(781) 314-3367',
                mailingAddress: '617 Lexington Street, Waltham MA 02452',
            }
        },
        forum: 'String ID to WPY Forum'
    },
    {
        id: 'gY5MGCzf09',
        name: 'The Charles River Museum of Industry and Innovation',
        whoSwipedRight: [],
        profile: {
            logo: 'The Charles River Museum of Industry and Innovation Logo',
            category: [
                'Art, Culture and Humanities'
            ],
            specialty: [
                'History',
                'Educaion and Technology'
            ],
            bio: 'Our mission is to educate people about America\'s industrial history and to encourage and inspire future innovation.',
            website: 'http://www.charlesrivermuseum.org',
            primaryRepresentative: 'Bob Perry',
            contactInfo: {
                email: 'info@charlesrivermuseum.org',
                phoneNumber: '(781) 893-5410',
                mailingAddress: '154 Moody St, Waltham MA 02453-5302',
            }
        },
        forum: 'String ID to Charles River Museum Forum'
    },
    {
        id: 'VRu6DyeTmW',
        name: '',
        whoSwipedRight: [],
        profile: {
            logo: 'Logo',
            category: [
                ''
            ],
            specialty: [
                ''
            ],
            bio: '',
            website: '',
            primaryRepresentative: '',
            contactInfo: {
                email: '',
                phoneNumber: '',
                mailingAddress: '',
            }
        },
        forum: 'String ID to Forum'
    },
    {
        id: 'KyfumHKgbO',
        name: '',
        whoSwipedRight: [],
        profile: {
            logo: 'Logo',
            category: [
                ''
            ],
            specialty: [
                ''
            ],
            bio: '',
            website: '',
            primaryRepresentative: '',
            contactInfo: {
                email: '',
                phoneNumber: '',
                mailingAddress: '',
            }
        },
        forum: 'String ID to Forum'
    },
    {
        id: 'gb1QoSZU41',
        name: '',
        whoSwipedRight: [],
        profile: {
            logo: 'Logo',
            category: [
                ''
            ],
            specialty: [
                ''
            ],
            bio: '',
            website: '',
            primaryRepresentative: '',
            contactInfo: {
                email: '',
                phoneNumber: '',
                mailingAddress: '',
            }
        },
        forum: 'String ID to Forum'
    },
    {
        id: 'vt3WbHfsfY',
        name: '',
        whoSwipedRight: [],
        profile: {
            logo: 'Logo',
            category: [
                ''
            ],
            specialty: [
                ''
            ],
            bio: '',
            website: '',
            primaryRepresentative: '',
            contactInfo: {
                email: '',
                phoneNumber: '',
                mailingAddress: '',
            }
        },
        forum: 'String ID to Forum'
    },
    {
        id: 'rbOoteS2pd',
        name: '',
        whoSwipedRight: [],
        profile: {
            logo: 'Logo',
            category: [
                ''
            ],
            specialty: [
                ''
            ],
            bio: '',
            website: '',
            primaryRepresentative: '',
            contactInfo: {
                email: '',
                phoneNumber: '',
                mailingAddress: '',
            }
        },
        forum: 'String ID to Forum'
    },
    {
        id: 'YO7Y7qaJ9q',
        name: '',
        whoSwipedRight: [],
        profile: {
            logo: 'Logo',
            category: [
                ''
            ],
            specialty: [
                ''
            ],
            bio: '',
            website: '',
            primaryRepresentative: '',
            contactInfo: {
                email: '',
                phoneNumber: '',
                mailingAddress: '',
            }
        },
        forum: 'String ID to Forum'
    },
    {
        id: 'rkkSMAlslL',
        name: '',
        whoSwipedRight: [],
        profile: {
            logo: 'Logo',
            category: [
                ''
            ],
            specialty: [
                ''
            ],
            bio: '',
            website: '',
            primaryRepresentative: '',
            contactInfo: {
                email: '',
                phoneNumber: '',
                mailingAddress: '',
            }
        },
        forum: 'String ID to Forum'
    },
    {
        id: 'uPx31efA3g',
        name: '',
        whoSwipedRight: [],
        profile: {
            logo: 'Logo',
            category: [
                ''
            ],
            specialty: [
                ''
            ],
            bio: '',
            website: '',
            primaryRepresentative: '',
            contactInfo: {
                email: '',
                phoneNumber: '',
                mailingAddress: '',
            }
        },
        forum: 'String ID to Forum'
    },

]