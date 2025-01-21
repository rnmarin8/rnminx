import { useState } from 'react';
import { HomeIcon, CreditCardIcon, WrenchIcon, InboxIcon, BuildingOfficeIcon, UsersIcon, DocumentTextIcon, BanknotesIcon, ChartBarIcon, DocumentIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

function App() {
  // ... existing state and constants ...

  const features = [
    {
      icon: BuildingOfficeIcon,
      title: "Property Management",
      description: "Efficiently manage multiple properties, track maintenance, and handle tenant requests all in one place."
    },
    {
      icon: UsersIcon,
      title: "Tenant Portal",
      description: "Give tenants a dedicated portal to pay rent, submit maintenance requests, and communicate with property managers."
    },
    {
      icon: DocumentTextIcon,
      title: "Digital Leasing",
      description: "Streamline the leasing process with digital applications, contracts, and e-signatures."
    },
    {
      icon: BanknotesIcon,
      title: "Financial Tools",
      description: "Track rent payments, expenses, and generate financial reports with our comprehensive accounting tools."
    }
  ];

  const stats = [
    { number: "1000+", label: "Properties Managed" },
    { number: "5000+", label: "Happy Tenants" },
    { number: "98%", label: "Collection Rate" },
    { number: "24/7", label: "Support" }
  ];

  const testimonials = [
    {
      quote: "Propwise has revolutionized how we manage our properties. The automation and organization it provides is invaluable.",
      author: "Sarah Johnson",
      role: "Property Manager"
    },
    {
      quote: "As a tenant, I love how easy it is to pay rent and submit maintenance requests. The portal is very user-friendly.",
      author: "Michael Chen",
      role: "Tenant"
    }
  ];

  const renderHomeContent = () => {
    return (
      <div className="p-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Property Management Made Simple
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Streamline your property management operations with our all-in-one platform
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Propwise?</h2>
          <div className="grid grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-gray-600 italic mb-4">"{testimonial.quote}"</div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Property Management?</h2>
          <p className="text-gray-600 mb-6">Join thousands of property managers who trust Propwise</p>
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return renderHomeContent();
      case 'payments':
        return renderPaymentsContent();
      // ... rest of the cases ...
    }
  };

  // ... rest of the component ...
}

export default App;