/* eslint-disable @next/next/no-img-element */
import { ALL_ABILITY } from "@/config/ability";
import { cn } from "@/lib/utils";
import { RoughNotation } from "react-rough-notation";

const Ability = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const ABILITYS = ALL_ABILITY[`ABILITYS_${langName.toUpperCase()}`];

  return (
    <section
      id={id}
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 py-6"
    >
      <h2 className="text-center text-white">
        <RoughNotation type="highlight" show={true} color="#2563EB">
          {locale.title}
        </RoughNotation>
      </h2>
      <div className="grid grid-cols-1 grid-rows-1 gap-6 relative lg:grid-cols-12 lg:grid-rows-2">
        {ABILITYS?.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              index === 0 && "lg:col-span-5 ",
              index === 1 && "lg:col-span-7 ",
              index === 2 && "lg:col-span-7",
              index === 3 && "lg:col-span-5",
              "p-4 rounded-xl overflow-hidden border"
            )}
            style={{
              ...(index === 0 && {
                backgroundImage:
                  "linear-gradient(to bottom right, #00A9A6 0%, #33BABB 100%)",
              }),
              ...(index === 1 && {
                backgroundImage:
                  "linear-gradient(120deg, #3370ff 0%, #4e83fd 100%)",
              }),
              ...(index === 2 && {
                backgroundImage:
                  "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)",
              }),
              ...(index === 3 && {
                backgroundImage:
                  "linear-gradient(to right, #FDCBB1 0%, #FEE5D8 100%)",
              }),
            }}
          >
            <h2
              className={cn(
                "text-[18px] md:text-[28px] font-bold text-white",
                index === 2 && "text-[#111824]",
                index === 3 && "text-[#111824]"
              )}
            >
              {item.title}
            </h2>
            <p
              className={cn(
                "mt-2 md:mt-0 mb-5 text-[12px] md:text-[14px] whitespace-pre-wrap text-[#ffffffe6]",
                index === 2 && "text-[#111824]",
                index === 3 && "text-[#111824]"
              )}
            >
              {item.content}
            </p>
            <div className={cn("w-full relative min-h-[150px]")}>
              <img key={index} src={item.image} alt="ABILITYS" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ability;

