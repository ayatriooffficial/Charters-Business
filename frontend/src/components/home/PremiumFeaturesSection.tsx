"use client";

import { useState, useEffect } from "react";
import MeetingModal from "./MeetingModal";

interface Feature {
  id: string;
  title: string;
  description: string;
  details?: string;
  isExpandable?: boolean;
  meetingType: 'instant' | 'schedule';
}

const features: Feature[] = [
  {
    id: "ai-instruction",
    title: "Support differentiated instruction with the help of AI",
    description:
      "Personalize learning experiences using artificial intelligence to adapt to individual student needs and learning styles.",
    isExpandable: false,
    meetingType: 'instant',
  },
  {
    id: "reading-skills",
    title: "Help students build independent reading skills",
    description:
      "Develop critical reading comprehension and analytical thinking through guided practice and assessment.",
    isExpandable: false,
    meetingType: 'schedule',
  },
  {
    id: "self-paced",
    title: "Reinforce concepts with self-paced learning",
    description:
      "Assign interactive questions for YouTube videos (with the help of AI on select videos), give students real-time feedback and view insights into their performance as they move through a lesson.",
    details: "Learn more",
    isExpandable: true,
    meetingType: 'instant',
  },
  {
    id: "integrations",
    title: "Enhance lessons with popular integrations",
    description:
      "Connect with tools and platforms your students already use to create seamless learning experiences.",
    isExpandable: false,
    meetingType: 'schedule',
  },
];

const PremiumFeaturesSection = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("bacteria");
  const [activeFeature, setActiveFeature] = useState<string>("ai-instruction");
  const [progress, setProgress] = useState<number>(0);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [modalDefaultTab, setModalDefaultTab] = useState<'instant' | 'schedule'>('instant');

  const openMeetingModal = (type: 'instant' | 'schedule', e: React.MouseEvent) => {
    e.stopPropagation();
    setModalDefaultTab(type);
    setIsMeetingModalOpen(true);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleFeatureClick = (featureId: string) => {
    setActiveFeature(featureId);
    setProgress(0);
  };

  // Auto-cycle through features every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prevFeature) => {
        const currentIndex = features.findIndex((f) => f.id === prevFeature);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
      setProgress(0); // Reset progress when switching features
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Progress bar animation
  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 100 / 40; // 4000ms / 100ms = 40 steps
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [activeFeature]);

  // Render feature content based on active feature
  const renderFeatureContent = () => {
    if (activeFeature === "ai-instruction") {
      return (
        <div
          className="bg-white overflow-hidden"
          role="complementary"
          aria-labelledby="ai-demo-heading"
        >
          <div className="p-6">
            <h3 id="ai-demo-heading" className="sr-only">
              AI Instruction Demo
            </h3>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#B30437] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h4 className="text-lg font-semibold text-black mb-2">
                  AI-Powered Learning
                </h4>
                <p className="text-black">
                  Personalized instruction adapts to each student&apos;s needs
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeFeature === "reading-skills") {
      return (
        <div
          className="bg-white overflow-hidden"
          role="complementary"
          aria-labelledby="reading-demo-heading"
        >
          <div className="p-6">
            <h3 id="reading-demo-heading" className="sr-only">
              Reading Skills Demo
            </h3>
            <div className="bg-gradient-to-br from-green-100 to-teal-100 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#B30437] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <h4 className="text-lg font-semibold text-black mb-2">
                  Reading practice with fun books
                </h4>
                <p className="text-black">
                  Build independent reading skills through engaging content
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeFeature === "self-paced") {
      return (
        <div
          className="bg-white overflow-hidden"
          role="complementary"
          aria-labelledby="demo-heading"
        >
          {/* Mock Browser Header */}
          <div className="bg-gray-100 px-4 py-3">
            <div className="flex items-center space-x-2">
              <button
                className="w-3 h-3 bg-red-400 rounded-full"
                aria-label="Close window"
              />
              <button
                className="w-3 h-3 bg-yellow-400 rounded-full"
                aria-label="Minimize window"
              />
              <button
                className="w-3 h-3 bg-green-400 rounded-full"
                aria-label="Maximize window"
              />
            </div>
            <div className="flex items-center justify-center mt-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-4 h-4 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">▶</span>
                </div>
                <span>Photosynthesis</span>
              </div>
              <button
                className="ml-auto text-[#B30437] bg-red-100 px-3 py-1 rounded text-sm font-medium hover:bg-red-200 transition-colors"
                aria-label="Turn in assignment"
              >
                Turn in
              </button>
            </div>
          </div>

          {/* Video Content Area */}
          <div className="p-6">
            <h3 id="demo-heading" className="sr-only">
              Interactive Learning Demo
            </h3>

            {/* Mock Video Player */}
            <div
              className="bg-gradient-to-br from-blue-200 to-yellow-200 h-48 mb-6 flex items-center justify-center relative overflow-hidden"
              role="img"
              aria-label="Educational video about photosynthesis showing animated flowers and sun"
            >
              {/* Animated Elements */}
              <div className="absolute top-4 right-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-full relative">
                  {/* Sun rays */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-4 bg-yellow-500 rounded"
                        style={{
                          top: "-8px",
                          left: "50%",
                          transformOrigin: "50% 40px",
                          transform: `translateX(-50%) rotate(${i * 45}deg)`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Flowers */}
              <div className="flex space-x-8">
                <div className="relative">
                  {/* Flower 1 */}
                  <div className="w-12 h-12 relative">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-6 bg-pink-400 rounded-full"
                        style={{
                          top: "50%",
                          left: "50%",
                          transformOrigin: "50% 100%",
                          transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                        }}
                      />
                    ))}
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="w-1 h-8 bg-green-500 mx-auto" />
                </div>

                <div className="relative">
                  {/* Flower 2 */}
                  <div className="w-8 h-8 relative">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-4 bg-pink-300 rounded-full"
                        style={{
                          top: "50%",
                          left: "50%",
                          transformOrigin: "50% 100%",
                          transform: `translate(-50%, -100%) rotate(${i * 60}deg)`,
                        }}
                      />
                    ))}
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="w-1 h-6 bg-green-500 mx-auto" />
                </div>
              </div>

              {/* Green circle (representing oxygen/photosynthesis) */}
              <div className="absolute top-8 left-8 w-8 h-8 bg-green-400 rounded-full opacity-80" />

              {/* Video controls */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full opacity-50" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white rounded-full opacity-50" />
                </div>
              </div>
            </div>

            {/* Question Section */}
            <div className="space-y-4">
              <h4 className="font-semibold text-black">
                Which organisms can perform photosynthesis?
              </h4>

              <fieldset className="space-y-3">
                <legend className="sr-only">Select the correct answer</legend>

                {[
                  { id: "amoeba", label: "Amoeba", value: "amoeba" },
                  { id: "humans", label: "Humans", value: "humans" },
                  {
                    id: "bacteria",
                    label: "Bacteria",
                    value: "bacteria",
                  },
                ].map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center space-x-3 cursor-pointer group"
                    htmlFor={option.id}
                  >
                    <input
                      type="radio"
                      id={option.id}
                      name="photosynthesis-question"
                      value={option.value}
                      checked={selectedAnswer === option.value}
                      onChange={() => handleAnswerSelect(option.value)}
                      className="w-4 h-4 text-[#B30437] focus:ring-[#B30437] focus:ring-2"
                      aria-describedby={`${option.id}-description`}
                    />
                    <span
                      className={`text-sm ${selectedAnswer === option.value
                        ? "text-black font-medium"
                        : "text-gray-700"
                        } group-hover:text-black transition-colors`}
                    >
                      {option.label}
                    </span>
                    {selectedAnswer === option.value &&
                      option.value === "bacteria" && (
                        <div
                          className="ml-auto w-5 h-5 bg-[#B30437] rounded-full flex items-center justify-center"
                          role="img"
                          aria-label="Correct answer"
                        >
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                  </label>
                ))}
              </fieldset>

              {/* Progress indicator */}
              <div className="flex justify-between items-center mt-6 pt-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${i < 3 ? "bg-[#B30437]" : "bg-gray-300"
                        }`}
                      role="img"
                      aria-label={`Progress step ${i + 1} ${i < 3 ? "completed" : "pending"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">3 of 5</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeFeature === "integrations") {
      return (
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          role="complementary"
          aria-labelledby="integrations-demo-heading"
        >
          <div className="p-6">
            <h3 id="integrations-demo-heading" className="sr-only">
              Integrations Demo
            </h3>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#B30437] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🔗</span>
                </div>
                <h4 className="text-lg font-semibold text-black mb-2">
                  Popular Integrations
                </h4>
                <p className="text-black">
                  Connect with tools your students already use
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section
      className="mx-[0%] relative z-[5] mb-8 bg-white pt-16 pb-8 border-b border-gray-300"
      aria-labelledby="enrich-learning-heading"
      role="region"
    >
      <div className="max-w-7xl w-full px-2 md:mx-auto">
        {/* Main Header Section */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold text-[#B30437] tracking-wider mb-3"
            role="text"
          >
            PERSONALIZED LEARNING
          </p>

          {/* Main Heading */}
          <header className="mb-8">
            <h2
              id="enrich-learning-heading"
              className="text-3xl md:text-4xl lg:text-5xl  font-light text-black mb-8"
            >
              Enrich and{" "}
              <span className="italic font-serif text-[#B30437]">
                personalize learning
              </span>
            </h2>
            <p className="text-xl lg:text-xl text-black mx-auto leading-relaxed">
              Drive student agency with tools that meet students where they are
              – and build skills for their future.
            </p>
          </header>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <header>
              <h2
                id="premium-features-heading"
                className="text-xl lg:text-3xl font-light text-black mb-6"
              >
                Premium features{" "}
                <span className="italic font-serif text-[#B30437]">
                  that inspire new ways of teaching and learning
                </span>
              </h2>
            </header>

            {/* Features List */}
            <div
              className="space-y-10"
              role="list"
              aria-label="Premium learning features"
            >
              {features.map((feature) => {
                const isActive = feature.id === activeFeature;

                return (
                  <article
                    key={feature.id}
                    className="relative pl-8  transition-all duration-500 cursor-pointer"
                    role="listitem"
                    aria-labelledby={`feature-${feature.id}-title`}
                    onClick={() => handleFeatureClick(feature.id)}
                  >
                    {isActive && (
                      <div
                        className="absolute left-0 top-0 w-1 bg-[#B30437] transition-all duration-100 ease-linear rounded-r"
                        style={{ height: `${progress}%` }}
                        aria-hidden="true"
                      />
                    )}

                    <h3
                      id={`feature-${feature.id}-title`}
                      className={`text-lg font-semibold mb-2 transition-colors duration-500 ${isActive ? "text-black" : "text-gray-700"
                        }`}
                    >
                      {feature.title}
                    </h3>

                    {isActive && (
                      <div className="animate-fadeIn">
                        <p className="text-black leading-relaxed mb-3">
                          {feature.description}
                        </p>

                        {/* Meeting Button */}
                        <button
                          onClick={(e) => openMeetingModal(feature.meetingType, e)}
                          className={`inline-flex items-center gap-2 mt-2 py-2 px-4 rounded-lg font-medium text-sm transition-all ${feature.meetingType === 'instant'
                            ? 'bg-[#B30437] hover:bg-[#8B0329] text-white'
                            : 'bg-white border-2 border-[#B30437] text-[#B30437] hover:bg-[#B30437] hover:text-white'
                            }`}
                        >
                          <span>{feature.meetingType === 'instant' ? '📞' : '📅'}</span>
                          {feature.meetingType === 'instant' ? 'Call Now' : 'Schedule Later'}
                        </button>

                        {feature.isExpandable && feature.details && (
                          <button
                            className="ml-4 text-[#B30437] hover:text-[#8B0329] font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B30437] focus:ring-offset-2 rounded"
                            aria-label={`Learn more about ${feature.title}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log(`Learn more about: ${feature.title}`);
                            }}
                          >
                            {feature.details}
                          </button>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {/* Info Icon */}
            <div className="flex items-center mt-8">
              <div
                className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center"
                role="img"
                aria-label="Information"
              >
                <span className="text-[#B30437] text-sm font-bold">i</span>
              </div>
            </div>
          </div>

          {/* Right Column - Dynamic Content Based on Active Feature */}
          <div className="lg:pl-8">{renderFeatureContent()}</div>
        </div>

        {/* Mobile Layout - Accordion Style */}
        <div className="lg:hidden">
          <header className="mb-8">
            <h2
              id="premium-features-heading-mobile"
              className="text-xl font-light text-black mb-6"
            >
              Premium features{" "}
              <span className="italic font-serif text-[#B30437]">
                that inspire new ways of teaching and learning
              </span>
            </h2>
          </header>

          {/* Features Accordion List */}
          <div
            className="space-y-6"
            role="list"
            aria-label="Premium learning features"
          >
            {features.map((feature) => {
              const isActive = feature.id === activeFeature;

              return (
                <article
                  key={feature.id}
                  className="border-b border-gray-200 pb-6"
                  role="listitem"
                  aria-labelledby={`feature-mobile-${feature.id}-title`}
                >
                  {/* Feature Header - Clickable */}
                  <div
                    className="relative pl-6 py-2 cursor-pointer"
                    onClick={() => handleFeatureClick(feature.id)}
                  >
                    {isActive && (
                      <div
                        className="absolute left-0 top-0 w-1 bg-[#B30437] transition-all duration-100 ease-linear rounded-r"
                        style={{ height: `${progress}%` }}
                        aria-hidden="true"
                      />
                    )}

                    <h3
                      id={`feature-mobile-${feature.id}-title`}
                      className={`text-base font-semibold mb-2 transition-colors duration-500 ${isActive ? "text-black" : "text-gray-700"
                        }`}
                    >
                      {feature.title}
                    </h3>

                    {isActive && (
                      <div className="animate-fadeIn">
                        <p className="text-sm text-black leading-relaxed mb-3">
                          {feature.description}
                        </p>

                        {/* Meeting Button */}
                        <button
                          onClick={(e) => openMeetingModal(feature.meetingType, e)}
                          className={`inline-flex items-center gap-2 mt-2 py-2 px-4 rounded-lg font-medium text-sm transition-all ${feature.meetingType === 'instant'
                            ? 'bg-[#B30437] hover:bg-[#8B0329] text-white'
                            : 'bg-white border-2 border-[#B30437] text-[#B30437] hover:bg-[#B30437] hover:text-white'
                            }`}
                        >
                          <span>{feature.meetingType === 'instant' ? '📞' : '📅'}</span>
                          {feature.meetingType === 'instant' ? 'Call Now' : 'Schedule Later'}
                        </button>

                        {feature.isExpandable && feature.details && (
                          <button
                            className="ml-4 text-[#B30437] hover:text-[#8B0329] font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B30437] focus:ring-offset-2 rounded"
                            aria-label={`Learn more about ${feature.title}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log(`Learn more about: ${feature.title}`);
                            }}
                          >
                            {feature.details}
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Feature Content - Shows below when active */}
                  {isActive && (
                    <div className="mt-4 animate-fadeIn">
                      {renderFeatureContent()}
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Info Icon */}
          <div className="flex items-center mt-8">
            <div
              className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center"
              role="img"
              aria-label="Information"
            >
              <span className="text-[#B30437] text-sm font-bold">i</span>
            </div>
          </div>
        </div>
      </div>

      {/* Meeting Modal */}
      <MeetingModal
        isOpen={isMeetingModalOpen}
        onClose={() => setIsMeetingModalOpen(false)}
        defaultTab={modalDefaultTab}
      />
    </section>
  );
};

export default PremiumFeaturesSection;
