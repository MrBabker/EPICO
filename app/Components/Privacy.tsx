"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store";
import { motion } from "framer-motion";
import { Gamepad2, Mail } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  const isArabic = useSelector((state: RootState) => state.counter.isArabic);

  const content = {
    title: isArabic
      ? "سياسة الخصوصية وحماية البيانات"
      : "Privacy Policy & User Data Protection",

    introTitle: isArabic ? "مقدمة" : "Introduction",

    introText: isArabic
      ? "تحترم EPICO خصوصيتك وتلتزم بحماية معلوماتك الشخصية. توضح هذه السياسة البيانات التي نقوم بجمعها وكيفية استخدامها وحمايتها."
      : "EPICO respects your privacy and is committed to protecting your personal information. This policy explains what data we collect, how we use it, and how we keep it secure.",

    collectTitle: isArabic
      ? "البيانات التي نقوم بجمعها"
      : "Information We Collect",

    collectItems: isArabic
      ? [
          "اسم المستخدم ومعلومات الحساب",
          "البريد الإلكتروني",
          "بيانات تسجيل الدخول",
          "تقدم اللاعب والترتيب",
          "إحصائيات الاستخدام الأساسية",
          /* "معلومات الجهاز والمتصفح",*/
        ]
      : [
          "Username and account information",
          "Email address",
          "Login session data",
          "Game progress and rankings",
          "Basic analytics and app usage",
          /*"Device and browser information",*/
        ],

    usageTitle: isArabic ? "كيف نستخدم بياناتك" : "How We Use Your Data",

    usageText1: isArabic
      ? "نستخدم بياناتك لتوفير تسجيل الدخول وميزات اللعب والتقدم والترتيب ووظائف المنصة."
      : "We use your data to provide authentication, gameplay features, rankings, account progression, and platform functionality.",

    usageText2: isArabic
      ? "قد تُستخدم البيانات أيضًا لتحسين الأداء والأمان وتجربة المستخدم."
      : "Data may also be used to improve performance, security, and overall user experience.",

    usageText3: isArabic
      ? "لا تقوم EPICO ببيع معلومات المستخدمين لأي جهة خارجية."
      : "EPICO does not sell personal information to third parties.",

    deleteTitle: isArabic ? "حذف الحساب والبيانات" : "Account & Data Removal",

    deleteText: isArabic
      ? "يمكن للمستخدمين طلب حذف الحساب أو إزالة البيانات الشخصية في أي وقت عبر التواصل مع الدعم."
      : "Users may request account deletion or removal of personal data at any time by contacting support.",

    supportButton: isArabic ? "حذف حسابي" : "Delete my account",

    securityTitle: isArabic ? "الأمان" : "Security",

    securityText: isArabic
      ? "نتخذ إجراءات مناسبة لحماية بيانات المستخدمين ومنع الوصول غير المصرح به."
      : "We take reasonable measures to protect user information and keep platform data secure from unauthorized access.",

    footer: isArabic ? "جميع الحقوق محفوظة" : "All rights reserved.",
    childSafetyTitle: isArabic
      ? "معايير حماية الأطفال"
      : "Child Safety Standards",

    childSafetyText: isArabic
      ? "تلتزم EPICO بتوفير بيئة آمنة لجميع المستخدمين وتتبنى سياسة عدم التسامح مطلقًا مع أي شكل من أشكال الاستغلال أو الإساءة للأطفال. لا تسمح المنصة بأي محتوى أو سلوك ينتهك سلامة الأطفال أو يعرضهم للخطر."
      : "EPICO is committed to providing a safe environment for all users and maintains a zero-tolerance policy toward child sexual abuse and exploitation. The platform does not allow any content or behavior that endangers or exploits minors.",

    childSafetyItems: isArabic
      ? [
          "اتخاذ الإجراءات المناسبة ضد الحسابات المخالفة.",
          "توفير وسيلة للإبلاغ عن المخالفات أو المخاوف الأمنية.",
          "التعاون مع الجهات المختصة عند الحاجة وفقًا للقوانين المعمول بها.",
          "مراجعة البلاغات واتخاذ الإجراءات اللازمة لحماية المستخدمين.",
        ]
      : [
          "Take appropriate action against violating accounts.",
          "Provide a way to report violations or safety concerns.",
          "Cooperate with relevant authorities when legally required.",
          "Review reports and take necessary action to protect users.",
        ],

    childSafetyContact: isArabic
      ? "للتبليغ عن أي مخاوف تتعلق بسلامة الأطفال:"
      : "For child safety concerns or reports:",
  };

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#090014]
        text-white
        pt-15 
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.25),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.2),transparent_30%)]" />

      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      <div
        className="
          relative z-10
          max-w-6xl
          mx-auto
           md:px-0
          py-16 md:py-24
        "
      >
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20 justify-items-center">
          {/* Main Logo */}
          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
      relative
      w-24 h-24
      rounded-[30px]
      bg-gradient-to-br
      from-purple-500
      via-fuchsia-500
      to-orange-400
      flex items-center justify-center
      md:shadow-[0_0_40px_rgba(168,85,247,0.45)]
    "
          >
            <Gamepad2 className="text-white w-12 h-12" />

            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
        absolute
        -inset-3
        rounded-[36px]
        border border-white/10
      "
            />
          </motion.div>

          {/* EPICO */}
          <div dir="ltr" className="flex gap-1 mt-6">
            {[
              ["E", "#9d64ff"],
              ["P", "#f458ff"],
              ["I", "#ff5858"],
              ["C", "#ffcb0f"],
              ["O", "#16ffa2"],
            ].map(([letter, color], i) => (
              <motion.span
                key={letter}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 1.3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
                style={{ color }}
                className="
          text-4xl
          sm:text-5xl
          font-black
          tracking-wide
        "
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <p
            className="
              mt-5
              text-sm sm:text-base md:text-xl
              text-gray-300
              max-w-3xl
              mx-auto
              leading-8
              px-2
            "
          >
            {content.title}
          </p>
        </div>

        {/* CARD */}
        <div
          className="
            relative
            
            rounded-[24px] md:rounded-[40px]
            border border-purple-500/20
            bg-[#120e19c5]
            ssbackdrop-blur-xl
            p-5 sm:p-7 md:p-12
            ssshadow-[0_0_80px_rgba(120,0,255,0.15)]
          "
        >
          <div className="space-y-10 md:space-y-14">
            {/* INTRO */}
            <section>
              <h2
                className="
                  text-2xl md:text-4xl
                  font-bold
                  text-purple-300
                  mb-4 md:mb-6
                "
              >
                {content.introTitle}
              </h2>

              <p
                className="
                  text-gray-300
                  leading-8 md:leading-10
                  text-[15px] md:text-[18px]
                "
              >
                {content.introText}
              </p>
            </section>

            {/* COLLECT */}
            <section>
              <h2
                className="
                  text-2xl md:text-4xl
                  font-bold
                  text-purple-300
                  mb-5 md:mb-7
                "
              >
                {content.collectTitle}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {content.collectItems.map((item, i) => (
                  <div
                    key={i}
                    className="
                      flex items-center gap-4
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-4 md:p-5
                    "
                  >
                    <div
                      className="
                        shrink-0
                        w-10 h-10 md:w-12 md:h-12
                        rounded-xl
                        bg-purple-500/20
                        flex items-center justify-center
                        text-purple-300
                        text-lg md:text-xl
                      "
                    >
                      ✓
                    </div>

                    <span
                      className="
                        text-gray-200
                        text-sm md:text-base
                        leading-7
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* USAGE */}
            <section>
              <h2
                className="
                  text-2xl md:text-4xl
                  font-bold
                  text-purple-300
                  mb-5 md:mb-7
                "
              >
                {content.usageTitle}
              </h2>

              <div
                className="
                  space-y-4
                  text-gray-300
                  leading-8 md:leading-10
                  text-[15px] md:text-[18px]
                "
              >
                <p>{content.usageText1}</p>
                <p>{content.usageText2}</p>
                <p>{content.usageText3}</p>
              </div>
            </section>

            {/* DELETE */}
            <section>
              <h2
                className="
                  text-2xl md:text-4xl
                  font-bold
                  text-purple-300
                  mb-5 md:mb-7
                "
              >
                {content.deleteTitle}
              </h2>

              <p
                className="
                  text-gray-300
                  leading-8 md:leading-10
                  text-[15px] md:text-[18px]
                "
              >
                {content.deleteText}
              </p>

              <Link href="/pages/accdelete">
                <span
                  className="
    mt-7
    inline-flex
    items-center
    justify-center
    w-full sm:w-auto
    px-7 py-4
    rounded-[20px]
    bg-gradient-to-r from-[#ff4d4d] to-[#f00]
    font-bold
    text-sm md:text-base
    md:shadow-[0_0_40px_rgba(168,0,0,0.45)]
    hover:scale-[1.03]
    active:scale-95
    transition
  "
                >
                  {content.supportButton}
                </span>
              </Link>
            </section>

            {/* SECURITY */}
            <section>
              <h2
                className="
                  text-2xl md:text-4xl
                  font-bold
                  text-purple-300
                  mb-5 md:mb-7
                "
              >
                {content.securityTitle}
              </h2>

              <p
                className="
                  text-gray-300
                  leading-8 md:leading-10
                  text-[15px] md:text-[18px]
                "
              >
                {content.securityText}
              </p>
            </section>
            {/* CHILD SAFETY */}
            <section>
              <h2
                className="
      text-2xl md:text-4xl
      font-bold
      text-purple-300
      mb-5 md:mb-7
    "
              >
                {content.childSafetyTitle}
              </h2>

              <p
                className="
      text-gray-300
      leading-8 md:leading-10
      text-[15px] md:text-[18px]
      mb-6
    "
              >
                {content.childSafetyText}
              </p>

              <div className="space-y-3">
                {content.childSafetyItems.map((item, i) => (
                  <div
                    key={i}
                    className="
          flex items-start gap-3
          rounded-2xl
          border border-white/10
          bg-white/[0.03]
          p-4
        "
                  >
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex  items-center gap-3 flex-wrap mt-5">
                <p
                  className="
      text-purple-300
      font-medium
    "
                >
                  {content.childSafetyContact}
                </p>

                <a
                  href={`mailto:smilemedo@outlook.com?subject=${
                    isArabic
                      ? "تبليغ عن مخاوف تتعلق بسلامة الأطفال EPICO"
                      : "EPICO Reporting concerns related to child safety"
                  }`}
                  className="
      inline-flex
      items-center
      justify-center
      w-full
      gap-3
      px-5 py-2
      rounded-[10px]
      bg-gradient-to-r
      from-[#5500ff]
      to-[#8400ff]
      font-bold
      text-sm md:text-base
      md:shadow-[0_0_40px_rgba(60,85,247,0.45)]
      hover:scale-[1.02]
      active:scale-95
      transition
    "
                >
                  <Mail className="w-5 h-5" />
                  smilemedo@outlook.com
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="
            mt-10 md:mt-14
            text-center
            text-gray-500
            text-xs md:text-sm
          "
        >
          © 2026 EPICO. {content.footer}
        </div>
      </div>
    </div>
  );
}
