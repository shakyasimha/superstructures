"use client";

import Logo from "@/components/Header/Logo";

export default function Header(props: any) {
    return <header>
        {props.name}
        {props.isCompany ? "Inc." : " "}
        <Logo />
        <div> Menu </div>
    </header>;
}