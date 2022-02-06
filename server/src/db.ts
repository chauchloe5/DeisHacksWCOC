import { EphemeralKeyInfo } from "tls";

interface InonProfit {
    id: string,
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

let nonProfits: InonProfit[] = [
    {
        id: 'The Waltham Partnership for Youth',
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
        id: 'The Charles River Museum of Industry and Innovation',
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
]