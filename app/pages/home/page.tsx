"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Form {
  name: string;
  lname: string;
  email: string;
  message: string;
  phone: string;
}

const HomePage = () => {
  const [formValues, setFormValues] = useState<Form>({
    name: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex justify-center items-center bg-white md:flex-row mt-16 mb-10 w-[800px] container mx-auto">
        <div className=" w-[600px]">
          <div className="m-8  md:w-full bg-white">
            <form onSubmit={handleSend}>
              <div className="flex flex-col md:flex-row gap-4 m-4  w-full">
                <div className="flex flex-col md:w-full">
                  <Label className="m-2 font-Playfair-Display">
                    First Name
                  </Label>
                  <Input
                    placeholder="Name"
                    name="name"
                    required
                    className="w-full"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col w-full">
                  <Label className="m-2 font-Playfair-Display">Last Name</Label>
                  <Input
                    placeholder="Last Name"
                    name="lname"
                    required
                    className="w-full"
                    value={formValues.lname}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2 m-4 w-full">
                <div className="flex flex-col w-full">
                  <Label className="m-2 font-Playfair-Display">Email</Label>
                  <Input
                    required
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center gap-12 m-4 w-full">
                <div className="w-[350px] h-[35px] border rounded-lg flex justify-start gap-4 items-center ">
                  <RadioGroup defaultValue="option-one">
                    <RadioGroupItem value="option-three" id="option-one" />
                  </RadioGroup>
                  <div>
                    <h4>General Enquiry</h4>
                  </div>
                </div>
                <div className="w-[310px] h-[35px] border rounded-lg flex justify-start gap-4 items-center ">
                  <RadioGroup defaultValue="option-one">
                    <RadioGroupItem value="option-two" id="option-two" />
                  </RadioGroup>
                  <div>
                    <h4>General Enquiry</h4>
                  </div>
                </div>
              </div>

              <div className="flex flex-col m-4 w-full">
                <Label className="m-2 font-Playfair-Display">Message</Label>
                <Textarea
                  placeholder="Message"
                  name="message"
                  required
                  className="w-full"
                />
              </div>

              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I consent to being contacted by the team *
                  </label>
                </div>
              </div>

              <div className="flex m-4 w-full">
                <Button
                  variant={"destructive"}
                  className="bg-[#1d6145] w-full hover:bg-[#4a6e5f]"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
