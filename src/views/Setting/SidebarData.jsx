import Accounts from '~/media/Images/user.png';
import AccountsWhite from '~/media/Images/user1.png';
import Email from '~/media/Images/email.png';
import EmailWhite from '~/media/Images/email1.png';
import Sms from '~/media/Images/sms1.png';
import SmsWhite from '~/media/Images/sms.png';


const SideBarData = [   
    {
        pathTo: '/setting/profile/edit',
        btnVal: "Edit Profile",
        Iconblack: Accounts,
        IconWhite: AccountsWhite
    },
    {
        option: "/setting/email",
        pathTo: '/setting/email/manage',
        btnVal: "Manage Email",
        Iconblack: Email,
        IconWhite: EmailWhite
    },
    {
        pathTo: '/setting/sms/manage',
        btnVal: "Manage SMS",
        Iconblack: Sms,
        IconWhite: SmsWhite
    }
]

export default SideBarData;
