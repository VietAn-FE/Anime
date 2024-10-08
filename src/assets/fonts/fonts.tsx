import {Roboto} from 'next/font/google'
import localFont from 'next/font/local'
export const roboto = Roboto({
    weight:['100','300','400','500','700','900'],
    subsets:['latin'],
    display:'swap'
})

export const geist = localFont({
    src:[{
        path: './GeistVF.woff',
        weight:'100'
    },{
        path:'./GeistMonoVF.woff',
        weight:'300'
    }],
    display:'swap'
})