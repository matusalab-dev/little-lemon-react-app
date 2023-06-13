import { FaChevronDown, FaUser, FaUserCircle, FaUserAlt } from "react-icons/fa";

export const GridSlot = ({ NumberOfSlot, colNumber, label, value, icon }) => {
  console.log(colNumber);
  console.log(NumberOfSlot);

  function slot(NumberOfSlot, colNumber) {
    const SlotList = NumberOfSlot.map((slotNum) => {
      if (colNumber === 2) {
        return (
          <>
            <ul className="option_list flex border-b-2 border-slate-300">
              <li className="option flex w-full  rounded-t-m border-r-2 border-slate-300 borderColor font-bold text-lg px-7 py-5 text-primary-200 bg-secondary-300">
                {slotNum[0]}
              </li>
              <li className="option  w-full font-bold text-lg px-7 py-5 text-primary-200 bg-secondary-300">
                {slotNum[1]}
              </li>
            </ul>
          </>
        );
      } else if (colNumber === 1) {
        return (
          <>
            <ul className="option_list flex border-b-2 border-slate-300">
              <li className="option flex w-full  rounded-t-m border-r-2 border-slate-300 borderColor font-bold text-lg px-7 py-5 text-primary-200 bg-secondary-300">
                {slotNum}
              </li>
            </ul>
          </>
        );
      }
    });

    return SlotList;
  }

  return (
    <div class="mb-3">
      <label
        htmlfor="dinners"
        class="form-label block text-secondary-300  font-semibold mb-2"
      >
        {/* Number of Dinners */}
        {label}
      </label>
      <div className="w-[290px]  options group relative cursor-pointer text-center bg-secondary-300 text-primary-200  py-4 px-6 rounded-md">
        {icon}
        <span className=" font-secondary font-semibold text-lg ">
          {/* No. of Dinners */}
          {value}
        </span>
        <FaChevronDown className="absolute top-[1.35rem] right-4  group-hover:rotate-180  text-primary-200 font-semibold text-2xl" />
        <div className="option__stack hidden group-hover:flex  flex-col  mt-5 w-[300px] absolute left-0 z-10">
          {slot(NumberOfSlot, colNumber)}
        </div>
      </div>
    </div>
  );
};
