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
    name: 'Charles River Community Health Center',
    whoSwipedRight: [],
    profile: {
        logo: 'Logo',
        category: [
            'Health'
        ],
        specialty: [
            'Community Health'
        ],
        bio: '​​Charles River Community Health’s mission is to improve the health and well-being of the communities of Allston, Brighton, Waltham and surrounding areas by providing quality, comprehensive, coordinated care that is patient-centered, family friendly, and community focused.',
        website: 'http://www.charlesriverhealth.org/',
        primaryRepresentative: 'Elizabeth Browne',
        contactInfo: {
            email: '',
            phoneNumber: '(781) 693-3800',
            mailingAddress: '43 Foundry Avenue, MA, 02453',
        }
    },
    forum: 'String ID to Forum'
}
const d = <nonProfitObject> {
    name: 'The Haven Project',
    whoSwipedRight: [],
    profile: {
        logo: 'Logo',
        category: [
            'Human Service'
        ],
        specialty: [
            'Homelessness',
            'Youth Development'
        ],
        bio: "The Haven Project's mission is to equip and empower homeless and unaccompanied young adults north of Boston, between the ages of 17-24, with the skills and support they need to be safe and self-sufficient.",
        website: 'https://havenproject.net/get-help/',
        primaryRepresentative: 'Gini Mazman',
        contactInfo: {
            email: 'office@havenproject.net',
            phoneNumber: '(781) 913-5738',
            mailingAddress: '57 Munroe St, Lynn, MA, 01901',
        }
    },
    forum: 'String ID to Forum'
}
const e = <nonProfitObject> {
    name: 'American Consumer Credit Counselors ',
    whoSwipedRight: [],
    profile: {
        logo: 'Logo',
        category: [
            'Public/Social Benefit'
        ],
        specialty: [
            'Financial Services'
        ],
        bio: 'To empower consumers with financial education to build a better life.',
        website: 'https://www.consumercredit.com',
        primaryRepresentative: 'Allen Amadin',
        contactInfo: {
            email: 'info@consumercredit.com',
            phoneNumber: '(617)-559-5700',
            mailingAddress: '130 Rumford Ave, Auburndale, MA, 02466',
        }
    },
    forum: 'String ID to Forum'
}
const f = <nonProfitObject> {
    name: 'The Right to Immigration Institute',
    whoSwipedRight: [],
    profile: {
        logo: 'Logo',
        category: [
            'International',
            'Human Services'
        ],
        specialty: [
            'Law Services'
        ],
        bio: 'At The Right to Immigration Institute, we tackle this issue head on. By providing our services pro bono and training a talented team of paralegal and accredited representatives who can assist on cases, we are working to shrink the number of people who must face immigration court alone.',
        website: 'https://www.therighttoimmigration.org/staff',
        primaryRepresentative: 'Alejandro Bracamontes',
        contactInfo: {
            email: 'abracamontes@therighttoimmigration.org',
            phoneNumber: '(781) 891-6689 Ext.207',
            mailingAddress: '14b Felton Street, Waltham, MA, 02453',
        }
    },
    forum: 'String ID to Forum'
}
const g = <nonProfitObject> {
    name: 'REACH Beyond Domestic Violence, Inc.',
    whoSwipedRight: [],
    profile: {
        logo: 'Logo',
        category: [
            'Human Services'
        ],
        specialty: [
            'Support for Domestic Abuse Survivors'
        ],
        bio: 'REACH provides survivors of domestic violence with safety, shelter, and a path to healing. Our innovative, community-based approach promotes healthy relationships, fosters collaboration, and empowers community members to be agents of change.',
        website: 'http://www.reachma.org',
        primaryRepresentative: 'Laura Van Zandt',
        contactInfo: {
            email: 'info@reachma.org',
            phoneNumber: '(781) 891-0724',
            mailingAddress: 'PO Box 540024, Waltham, MA, 02454',
        }
    },
    forum: 'String ID to Forum'
}
const h = <nonProfitObject> {
    name: 'The Telephone Museum',
    whoSwipedRight: [],
    profile: {
        logo: 'Logo',
        category: [
            'Art, Cukture and Humanities'
        ],
        specialty: [
            'Technology',
            'History',
            'Innovation',
            'Education',
        ],
        bio: "The Telephone Museum fosters enthusiasm for engineering by leveraging America’s remarkable telephone history with educational programs that compare modern day telecommunications to vintage technology. The museum’s telephone collection is the focal point of this effort, and in conjunction with a maker space, serves to cultivate the entrepreneurial spirit which gave birth to the telephone and continues to drive today’s inventors and innovators.",
        website: 'http://www.telephone-museum.org',
        primaryRepresentative: 'Vincent Valentine',
        contactInfo: {
            email: '',
            phoneNumber: '(781) 314-6864',
            mailingAddress: '289 Moody Street, Waltham, MA. 02453',
        }
    },
    forum: 'String ID to Forum'
}
const i = <nonProfitObject> {
    name: 'Communities United, Inc.',
    whoSwipedRight: [],
    profile: {
        logo: 'Logo',
        category: [
            'Education and Research',
            'Human Services',
        ],
        specialty: [
            'Education for Youth',
            'Family Services',
        ],
        bio: "Communities United, Inc.’s mission is to provide high quality education and family services to a diverse population of children, ages 4 months to 5 years. We strive to ensure the success of the child, empower the family and strengthen the community.",
        website: 'http://www.communitiesunitedinc.org',
        primaryRepresentative: 'Terri Natale',
        contactInfo: {
            email: 'enrollment@communitiesunitedinc.org',
            phoneNumber: '(617) 744-6076',
            mailingAddress: '4 Militia Drive, Suite 1, Lexington, MA, 02421',
        }
    },
    forum: 'String ID to Forum'
}
const j = <nonProfitObject> {
    name: "Land's Sake",
    whoSwipedRight: [],
    profile: {
        logo: 'Logo',
        category: [
            'Environemnt and Animals'
        ],
        specialty: [
            'Agriculture'
        ],
        bio: "Connecting people to the land to build community and inspire lifelong stewardship",
        website: 'https://landssake.org',
        primaryRepresentative: 'Pam Hess',
        contactInfo: {
            email: '',
            phoneNumber: '(781) 893-1162',
            mailingAddress: '27 Crescent Street, Weston, MA, 02493',
        }, 
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