import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCardIcon from '@mui/icons-material/AddCard';
import BackupIcon from '@mui/icons-material/Backup';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        title: "ホーム",
        icon: <HomeIcon />,
        link: "/home",
    },
    {
        title: "メール",
        icon: <EmailIcon />,
        link: "/mail",
    },
    {
        title: "アナリティクス",
        icon: <AnalyticsIcon />,
        link: "/Analytics",
    },
    {
        title: "友達追加",
        icon: <PersonAddIcon />,
        link: "/PersonAdd",
    },
    {
        title: "お支払い設定",
        icon: <AddCardIcon />,
        link: "/AddCard",
    },
    {
        title: "アップロード",
        icon: <BackupIcon />,
        link: "/Upload",
    },
    {
        title: "詳細設定",
        icon: <SettingsIcon />,
        link: "/Upload",
    },
]
