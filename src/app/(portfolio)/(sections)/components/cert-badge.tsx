"use client";

import Image from "next/image";

const CertBadge = ({ show }: { show: boolean }) => {
  return (
    <>
      {show ? (
        <div
          className="border  rounded-md p-2 cursor-pointer"
          onClick={() => {
            window.open(
              "https://www.credly.com/badges/33bed9c3-6848-409c-9cdd-f5a00ba3ffab/public_url",
              "_blank"
            );
          }}
        >
          <Image
            src="/aws-certified-cloud-practitioner.png"
            alt="AWS Certified Cloud Practitioner"
            width={200}
            height={200}
            className="w-24 h-24 object-contain"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center w-26 h-26 rounded-md border bg-white overflow-hidden">
          <div className="flex items-center justify-center flex-col">
            <p className="text-sm text-muted-foreground">Certification</p>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CertBadge;
