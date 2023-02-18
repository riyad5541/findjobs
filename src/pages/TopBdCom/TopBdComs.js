import React from 'react';
import TopBdCom from './TopBdCom';

const TopBdComs = () => {
    const bdComData = [
        {
            id: 1,
            name: 'TigerIT Bangladesh LTD',
            image: 'https://media.licdn.com/dms/image/C510BAQFYFxqt1fCdww/company-logo_200_200/0/1547096363931?e=2147483647&v=beta&t=SRmggNjqyOrGSi3mi6kpMQK01qrcfgDUVT9wpJ1fWg8'
        },
        {
            id: 2,
            name: 'Datasoft Systems BD ltd',
            image: 'https://pbs.twimg.com/profile_images/1199633896171692032/fmjoGwsW_400x400.jpg'
        },
        {
            id: 3,
            name: 'Magnito Digital Limited',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDmAmLIuHtWgLDEjNoNHyANtYlNJUZ4hHOcXesm4EqQ&s'
        },
    ]
    return (
        <div className='mt-16'>
        <div className='text-center'>
            <h2 className='text-lg font-bold text-cyan-600'>Top IT Companies</h2>
            <h2 className='text-3xl'>Top IT Companies in Bangladesh</h2>
        </div>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
            {
                bdComData.map(topBdCom => <TopBdCom
                key={topBdCom.id}
                topBdCom={topBdCom}
                ></TopBdCom>
                    )
            }
        </div>
    </div>
    );
};

export default TopBdComs;