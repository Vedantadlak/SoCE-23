import {useParams} from 'react-router-dom'
import Ankit from '../../Components/blogs/Ankit';
import Aryaman_Shandilya from '../../Components/blogs/Aryaman_Shandilya';
import Ashutosh_Ranjan from '../../Components/blogs/Ashutosh_Ranjan';
import Chitwan_Garg from '../../Components/blogs/Chitwan_Garg';
import Dishaa_Rajora from '../../Components/blogs/Dishaa_Rajora';
import Dishant_Parewa from '../../Components/blogs/Dishant_Parewa';
import Gaurav_Kamboj from '../../Components/blogs/Gaurav_Kamboj';
import Gaurav_Jiwan from '../../Components/blogs/Gaurav_Jiwan';
import Himanshu_Mishra from '../../Components/blogs/Himanshu_Mishra';
import JeetendraKP from '../../Components/blogs/JeetendraKP';
import Krishan_Kumar from '../../Components/blogs/Krishan_Kumar';
import Krishna_Deo from '../../Components/blogs/Krishna_Deo';
import Mradul_Chaudhary from '../../Components/blogs/Mradul_Chaudhary';
import Mudit_Kumar from '../../Components/blogs/Mudit_Kumar';
import Naman_Jain from '../../Components/blogs/Naman_Jain';
import Neha_Aggarwal from '../../Components/blogs/Neha_Aggarwal';
import Piyush_Senwar from '../../Components/blogs/Piyush_Senwar';
import Rahul_Gauriyar from '../../Components/blogs/Rahul_Gauriyar';
import Rajat_Ghoshal from '../../Components/blogs/Rajat_Ghoshal';
import Samyak_Jain from '../../Components/blogs/Samyak_Jain';
import Samyak_Jain_Y18 from '../../Components/blogs/Samyak_Jain_Y18';
import Shashi_Shekhar from '../../Components/blogs/Shashi_Shekhar';
import Shuaib_Alam from '../../Components/blogs/Shuaib_Alam';
import Vineet_Shukla from '../../Components/blogs/Vineet_Shukla';
import Vishal_Agarwal from '../../Components/blogs/Vishal_Agarwal';
import Yashkrit_Gupta from '../../Components/blogs/Yashkrit_Gupta';
import Yashvardhan_Raizada from '../../Components/blogs/Yashvardhan_Raizada';
import React from 'react'

const Show = () => {
    const params = useParams()
    const id = params.link
    const link = `https://soceiitk.org/${id}`
    if(id==='ankit') return(<Ankit/>)
    else if(id==='aryaman_shandilya') return(<Aryaman_Shandilya/>)
    else if(id==='himanshu_mishra') return(<Himanshu_Mishra/>)
    else if(id==='ashutosh_ranjan') return(<Ashutosh_Ranjan/>)
    else if(id==='chitwan_garg') return(<Chitwan_Garg/>)
    else if(id==='yashvardhan_raizada') return(<Yashvardhan_Raizada/>)
    else if(id==='gaurav_jiwan') return(<Gaurav_Jiwan/>)
    else if(id==='piyush_senwar') return(<Piyush_Senwar/>)
    else if(id==='mradul_chaudhary') return(<Mradul_Chaudhary/>)
    else if(id==='neha_aggarwal') return(<Neha_Aggarwal/>)
    else if(id==='naman_jain') return(<Naman_Jain/>)
    else if(id==='yashkrit_gupta') return(<Yashkrit_Gupta/>)
    else if(id==='dishant_parewa') return(<Dishant_Parewa/>)
    else if(id==='mudit_kumar') return(<Mudit_Kumar/>)
    else if(id==='rahul_gauriyar') return(<Rahul_Gauriyar/>)
    else if(id==='gaurav_kamboj') return(<Gaurav_Kamboj/>)
    else if(id==='krishna_deo') return(<Krishna_Deo/>)
    else if(id==='vineet_shukla') return(<Vineet_Shukla/>)
    else if(id==='rajat_ghoshal') return(<Rajat_Ghoshal/>)
    else if(id==='shashi_shekhar') return(<Shashi_Shekhar/>)
    else if(id==='samyak_jain') return(<Samyak_Jain/>)
    else if(id==='vishal_agarwal') return(<Vishal_Agarwal/>)
    else if(id==='krishan_kumar') return(<Krishan_Kumar/>)
    else if(id==='dishaa_rajora') return(<Dishaa_Rajora/>)
    else if(id==='ashutosh_ranjan') return(<Ashutosh_Ranjan/>)
    else if(id==='chitwan_garg') return(<Chitwan_Garg/>)
    else if(id==='shuaib_alam') return(<Shuaib_Alam/>)
    else if(id==='jeetendra') return(<JeetendraKP/>)

}

export default Show
