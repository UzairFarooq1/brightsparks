import React, { useState } from "react";
import { Phone, MapPin, Clock, Send, Users, Award } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  const handleWhatsApp = (branch: "pangani" | "parklands") => {
    const numbers = {
      pangani: "+254746656600",
      parklands: "+254798672239",
    };
    const message = encodeURIComponent(
      `Hello! I'm interested in learning more about Bright Sparks School ${
        branch === "pangani" ? "Pangani" : "Parklands"
      } branch. Could you please provide me with more information?`
    );
    const whatsappUrl = `https://wa.me/${numbers[branch].replace(
      /[^0-9]/g,
      ""
    )}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-custom-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to give your child the best education? Get in touch with us to
            learn more about our programs or schedule a visit to any of our
            branches.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    Pangani Branch (Main)
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Pamba Road, Pangani, Nairobi
                  </p>
                  <p className="text-gray-600 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    +254 746656600
                  </p>
                  <p className="text-sm text-blue-600">
                    Over 15 years of experience
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-green-600 mr-3" />
                    Parklands Branch
                  </h4>
                  <p className="text-gray-600 mb-2">Parklands, Nairobi</p>
                  <p className="text-gray-600 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    +254 798 672239
                  </p>
                  <p className="text-sm text-green-600">Growing Campus</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-orange-500 mr-3" />
                    Ngao Road Branch
                  </h4>
                  <p className="text-gray-600 mb-2">Ngao Road, Nairobi</p>
                  <p className="text-gray-600 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    +254 798 672239
                  </p>
                  <p className="text-sm text-orange-500">
                    3 Years of Experience
                  </p>
                </div>
              </div>

              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-3" />
                  School Hours
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>8:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="branch"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Preferred Branch
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a branch</option>
                      <option value="pangani">Pangani Branch</option>
                      <option value="parklands">Parklands Branch</option>
                      <option value="ngao">Ngao Road Branch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="admission">Admission Information</option>
                    <option value="curriculum">Curriculum Details</option>
                    <option value="fees">Fee Structure</option>
                    <option value="activities">
                      Extracurricular Activities
                    </option>
                    <option value="visit">Schedule a Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your inquiry or how we can help you"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Contact Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to answer all your questions and help you make the best
              decision for your child's education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Personalized Consultation
              </h3>
              <p className="text-gray-600">
                Get personalized advice about the best programs and activities
                for your child's unique needs and interests.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Campus Tours
              </h3>
              <p className="text-gray-600">
                Schedule a visit to see our facilities, meet our teachers, and
                experience the Bright Sparks difference firsthand.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Admission Guidance
              </h3>
              <p className="text-gray-600">
                Get step-by-step guidance through our admission process and
                learn about available scholarships and payment plans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
