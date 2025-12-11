import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import BespokeHeader from "../components/bespoke/BespokeHeader";
import { bespokeMenuItems } from "../data/bespokeMenu";
import Process from "../components/bespoke/Process";
import Tuxedo from "../components/bespoke/Tuxedo";
import HandcraftedButtons from "../components/bespoke/HandcraftedButtons";
import Shirt from "../components/bespoke/Shirt";
import Accessories from "../components/bespoke/Accessories";
import GarmentCare from "../components/bespoke/GarmentCare";
import VirtualTailoring from "../components/bespoke/VirtualTailoring";

const BespokeTailoringPage = () => {
  const { tab = "process" } = useParams();
  const navigate = useNavigate();
  const tabs = bespokeMenuItems;

  const validTabIds = tabs.map((t) => t.id);
  if (!validTabIds.includes(tab)) {
    navigate("/bespoke-tailoring/process", { replace: true });
    return null;
  }

  return (
    <>
      <BespokeHeader tab={tab} />
      <section className="bg-gray-50 pb-12  z-10">
        <div className="hidden md:flex flex-col md:flex-row justify-center mb-12 border-b border-gray-300">
          {tabs.map(({ id, label }) => (
            <Link
              key={id}
              to={`/bespoke-tailoring/${id}`}
              className={`px-6 py-4 font-light text-sm tracking-wider transition-all duration-300 ${
                tab === id
                  ? "border-b-2 border-gray-800 text-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {tab === "process" && (
            <div className="animate-fadeIn">{<Process />}</div>
          )}
          {tab === "tuxedo" && (
            <div className="animate-fadeIn">{<Tuxedo />}</div>
          )}
          {tab === "hand-crafted" && (
            <div className="animate-fadeIn">{<HandcraftedButtons />}</div>
          )}
          {tab === "bespoke-shirt" && (
            <div className="animate-fadeIn">{<Shirt />}</div>
          )}
          {tab === "bespoke-accessories" && (
            <div className="animate-fadeIn">{<Accessories />}</div>
          )}
          {tab === "garment-care" && (
            <div className="animate-fadeIn">{<GarmentCare />}</div>
          )}
          {tab === "virtual" && (
            <div className="animate-fadeIn">{<VirtualTailoring />}</div>
          )}
        </div>
      </section>
    </>
  );
};

export default BespokeTailoringPage;
