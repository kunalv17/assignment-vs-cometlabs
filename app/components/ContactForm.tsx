import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import ReactSelect from "react-select";
import Input from "./Input";
import { Countries } from "../constants";

const ContactForm = () => {
  const [country, setCountry] = useState<string>("India");

  const { register, handleSubmit, setValue } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      country: "in",
    },
  });

  const groupedOptions: Record<string, any>[] = [
    {
      label: "Countries",
      options: Countries,
    },
  ];

  const onSubmit = (data: any) => {
    //can be used make an api request with payload as data
    console.log(data);
  };

  return (
    <div className="w-full max-w-[400px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <Input id="firstName" placeholder="First Name" register={register} />
        <Input id="lastName" placeholder="Last Name" register={register} />
        <Input id="email" placeholder="Email" register={register} />
        <Input
          id="phoneNumber"
          placeholder="Phone Number"
          register={register}
        />
        <Input id="company" placeholder="Company" register={register} />
        <ReactSelect
          className="placeholder:text-black"
          placeholder={country}
          value={country}
          onChange={(selectedOption: any) => {
            setValue("country", selectedOption?.value);
            setCountry(selectedOption.label);
          }}
          id="country"
          name="country"
          options={groupedOptions}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
            control: (base) => ({
              ...base,
              borderColor: "border-sky-500",
              borderRadius: "2px",
            }),
          }}
          classNames={{
            control: () =>
              "p-1 outline-sky-500 outline-1 border border-sky-500 rounded-md",
          }}
        />
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-sm w-full font-semibold mb-12"
        >
          CALL TO ACTION
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
