import { Link } from "react-router-dom";
import BtnContent from "../../../components/btn-content";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className="bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1713786509/chlps/Rectangle_48_2_1_u0uhdn.png)] bg-gray-700 bg-cover">
      <div className="box h-[570px] 2xl:h-[610px]">
        <div className="flex h-full items-center">
          <div>
            <p className="text-pri tracking-[18px] fs-300 lg:fs-400 fw-600">
              EMPOWERMENT
            </p>
            <p className="mt-5 text-4xl lg:text-6xl fw-600 lg:w-6/12 text-white">
              Empowering Excellence in Loss Prevention
            </p>
            <p className="mt-8 lg:mt-12 lg:w-6/12 text-white">
              The Association of Chartered Loss Prevention Specialists (CHLPS)
              is dedicated to empowering excellence in the field of loss
              prevention.
            </p>
            <div className="mt-8 lg:mt-6 flex gap-x-4">
              <Link
                to={""}
                className="btn-primary fs-500 rounded-full px-6 py-2"
              >
                Learn More
              </Link>
              <Link
                to={""}
                className="btn-primary fs-500 bg-white !text-primary hover:!text-white rounded-full px-6 py-2"
              >
                <BtnContent name="Apply Now" icon={<GoArrowUpRight />} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
