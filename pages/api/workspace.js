export default function handler(req, res) {
    res.status(200).json({
        id: 'a8sd789o2qhn4fsol',
        workspaces: [
            {
                id: 'a8goao29opfoj5',
                title: 'Wedding of Andira and Kinanjo',
                path: 'https://andirakinanti.menanti.com',
                date: '12 Jan 2022',
                status: 'Not Active',
                viewed: '~',
                guests: '~',
                attending: '~',
                rejects: '~'
            },
            {
                id: '9v90aiflkdabbgAA21',
                title: 'Wedding of Ramha and Tony',
                path: 'https://rahmatony.menanti.com',
                date: '12 Dec 2022',
                status: 'Not Active',
                viewed: '~',
                guests: '~',
                attending: '~',
                rejects: '~'
            }
        ]
    });
}
