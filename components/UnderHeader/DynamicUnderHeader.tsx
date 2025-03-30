"use client";

import dynamic from "next/dynamic";
import BreadCrumb from "../BreadCrumb";
import PageTitle from "../PageTitle";

const UnderHeaderContainer = dynamic(
    () =>
        Promise.resolve(() => <div id="under-header"></div>) as Promise<
            React.FC
        >,
    {
        ssr: false,
        loading: () => (
            <>
                <BreadCrumb.Skeleton />
                <PageTitle.Skeleton />
            </>
        ),
    }
);

export default UnderHeaderContainer;
