// CREATE COMPANY OBJECT
type companyObject = {
    name: string,
    logo: string,
    bio: string,
    swipedRightOn: string[], // non-profits that the company has swiped right on
};

// COMPANIES MAP
export let companies = new Map<string, companyObject>();
const company = <companyObject> {
    name: 'Waltham Chamber of Commerce',
    logo: 'String representation',
    bio: 'The Waltham Chamber of Commerce is an independent organization that represents the business community in the Waltham area and West Suburban region. There are nearly 600 business members who invest in the organization with their dollars, program ideas, and volunteer effort through committees and other related activities. In turn, the Chamber utilizes the investment to help business do business through local governmental affairs, state and federal legislative advocacy, public relations, economic and community development, business and educational programs, and a “voice for business."',
    swipedRightOn: []
}
companies.set('mNTRMoUIXz', company);

// CREATE A NON PROFIT OBJECT
type nonProfitObject = {
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
    },
    forum: string, // String is reference link to forum object
};

// NON PROFITS MAP
export let nonProfits = new Map<string, nonProfitObject>();

const a = <nonProfitObject> {
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
}
const b = <nonProfitObject> {
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
}
const c = <nonProfitObject> {
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
}
const d = <nonProfitObject> {
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
}
const e = <nonProfitObject> {
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
}
const f = <nonProfitObject> {
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
}
const g = <nonProfitObject> {
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
}
const h = <nonProfitObject> {
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
}
const i = <nonProfitObject> {
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
}
const j = <nonProfitObject> {
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
}

nonProfits.set('p0mJJV9sug', a);
nonProfits.set('gY5MGCzf09', b);
nonProfits.set('VRu6DyeTmW', c);
nonProfits.set('KyfumHKgbO', d);
nonProfits.set('gb1QoSZU41', e);
nonProfits.set('vt3WbHfsfY', f);
nonProfits.set('rbOoteS2pd', g);
nonProfits.set('YO7Y7qaJ9q', h);
nonProfits.set('rkkSMAlslL', i);
nonProfits.set('uPx31efA3g', j);