
// @/components/ContactUs.tsx
"use client"
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import contactUsData from '../../public/html/contact.json';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="contact">
      <div className="container px-4 md:px-6">
        <div className="space-y-2 text-center">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Contact Us</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{contactUsData.title}</h2>
          <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {contactUsData.description}
          </p>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label className="mb-2">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="𝕏 Developer Event Winners 🚀"
                  required
                />
              </div>
              <div>
                <Label className="mb-2">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="elonmusk@𝕏.com"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <Label className="mb-2">Message</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Type your message here..."
                  required
                />
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;