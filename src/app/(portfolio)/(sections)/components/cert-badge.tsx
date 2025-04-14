"use client";

import Image from "next/image";

const CertBadge = () => {
  return (
    <div
      className="border  rounded-md p-3 cursor-pointer"
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
  );
};

export default CertBadge;
