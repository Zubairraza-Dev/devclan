"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import redwave from "@/assets/images/redwaveAboutImage.svg";
interface CaseStudyDetailProps {
  params: any;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">About</h1>
      <div className="h-[490px]">
        <Image src={redwave} alt="redwave" objectFit="fill" className="" />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
          luctus lorem, in tempus mauris. Donec vulputate non neque placerat
          mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis
          luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum,
          ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare,
          ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum
          ipsum neque eu nunc. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum eu luctus lorem, in tempus mauris. Donec
          vulputate non neque placerat mattis. Donec eleifend tempor luctus.
          Fusce consequat erat ut iaculis luctus. Praesent sodales in velit sed
          fringilla. Nam turpis ipsum, ultrices vel efficitur vitae, sodales
          luctus augue. Mauris ornare, ipsum ac convallis interdum, lacus leo
          finibus urna, ut fermentum ipsum neque eu nunc. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Vestibulum eu luctus lorem, in
          tempus mauris. Donec vulputate non neque placerat mattis. Donec
          eleifend tempor luctus. Fusce consequat erat ut iaculis luctus.
          Praesent sodales in velit sed fringilla. Nam turpis ipsum, ultrices
          vel efficitur vitae, sodales luctus augue. Mauris ornare, ipsum ac
          convallis interdum, lacus leo finibus urna, ut fermentum ipsum neque
          eu nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum eu luctus lorem, in tempus mauris.{" "}
        </p>
      </div>
      {/* problem statemnet */}
      <div>
        <h1 className="text-4xl font-bold">Problem Statement</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
          luctus lorem, in tempus mauris. Donec vulputate non neque placerat
          mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis
          luctus.{" "}
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu luctus lorem, in tempus mauris. Donec vulputate non neque
            placerat mattis.{" "}
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu luctus lorem, in tempus mauris. Donec vulputate non neque
            placerat mattis.{" "}
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu luctus lorem, in tempus mauris. Donec vulputate non neque
            placerat mattis.{" "}
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu luctus lorem, in tempus mauris. Donec vulputate non neque
            placerat mattis.{" "}
          </li>
        </ul>
      </div>
      {/* Devclan involvement */}
      <div>
        <h1 className="text-4xl font-bold">DevClan Involvement</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
          luctus lorem, in tempus mauris. Donec vulputate non neque placerat
          mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis
          luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum,
          ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare,
          ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum
          ipsum neque eu nunc.{" "}
        </p>
      </div>
      {/* Core Functionality */}
      <div>
        <h1 className="text-4xl font-bold">Core Functionality</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
          luctus lorem, in tempus mauris. Donec vulputate non neque placerat
          mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis
          luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum,
          ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare,
          ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum
          ipsum neque eu nunc.{" "}
        </p>
      </div>
      {/* Technologies used */}
      <div>
        <h1 className="text-4xl font-bold">Technologies Used</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
          luctus lorem, in tempus mauris. Donec vulputate non neque placerat
          mattis. Donec eleifend tempor luctus. Fusce consequat erat ut iaculis
          luctus. Praesent sodales in velit sed fringilla. Nam turpis ipsum,
          ultrices vel efficitur vitae, sodales luctus augue. Mauris ornare,
          ipsum ac convallis interdum, lacus leo finibus urna, ut fermentum
          ipsum neque eu nunc.{" "}
        </p>
      </div>

      {/* <button onClick={() => router.push("/case-studies")}>
        Back to Case Studies
      </button> */}
    </div>
  );
};

export default CaseStudyDetail;
