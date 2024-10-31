"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
      <div className="flex justify-center items-center mt-8 container mx-auto">
        <div className="w-full">
          <div className="flex justify-center items-center flex-col gap-4">
            <h3 className="text-3xl font-Playfair-Display">Contact Us</h3>
            <span className="font-Playfair-Display md:w-[410px] w-[250px] text-lg">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col md:flex-row mt-16 mb-10 w-full container mx-auto">
        <div className=" w-full">
          <div className="m-8  md:w-full">
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
                <div className="flex flex-col w-full">
                  <Label className="m-2 font-Playfair-Display">
                    Phone Number
                  </Label>
                  <Input
                    placeholder="Phone"
                    name="phone"
                    type="number"
                    className="w-full"
                    required
                    value={formValues.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col m-4 w-full">
                <Label className="m-2 font-Playfair-Display">Message</Label>
                <Input
                  placeholder="Message"
                  name="message"
                  required
                  className="w-full"
                  value={formValues.message}
                  onChange={handleChange}
                />
              </div>

              <div className="flex m-4">
                <Button
                  disabled={status === "loading"}
                  variant={"destructive"}
                  className="px-8"
                  type="submit"
                ></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
