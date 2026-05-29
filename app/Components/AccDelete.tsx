"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { motion } from "framer-motion";
import { ShieldAlert, Mail, Trash2 } from "lucide-react";

const AccDelete = () => {
  const isArabic = useSelector((state: RootState) => state.counter.isArabic);

  const content = {
    title: isArabic ? "طلب حذف الحساب" : "Account Deletion Request",

    description: isArabic
      ? "إذا كنت ترغب في حذف حسابك وبياناتك المرتبطة بمنصة EPICO، يرجى إرسال طلب حذف عبر البريد الإلكتروني."
      : "If you would like to delete your EPICO account and associated data, please send an account deletion request via email.",

    instructionsTitle: isArabic ? "تعليمات مهمة" : "Important Instructions",

    instructions: isArabic
      ? [
          "يفضّل إرسال الطلب من البريد الإلكتروني المرتبط بالحساب. في حال استخدام بريد مختلف، قد يُطلب التحقق من ملكية الحساب قبل تنفيذ عملية الحذف.",
          "يرجى كتابة اسم المستخدم والبريد الإلكتروني المرتبط بالحساب داخل الرسالة.",
          "سيتم التحقق من الطلب قبل تنفيذ عملية حذف الحساب.",
          "قد تستغرق معالجة الطلب بعض الوقت لأسباب أمنية.",
        ]
      : [
          "It is recommended to send the request using the email associated with the account. If a different email is used, additional verification may be required before the deletion request is processed.",
          "Please include your username and the email associated with the account in the message.",
          "Requests will be verified before account deletion is processed.",
          "Processing the request may take some time for security reasons.",
        ],

    warning: isArabic
      ? "بعد حذف الحساب قد لا يمكن استعادة البيانات أو التقدم داخل المنصة."
      : "After account deletion, your account data and progression may not be recoverable.",

    button: isArabic ? "إرسال طلب حذف الحساب" : "Send Deletion Request",
  };

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="
        min-h-screen
        bg-[#090014]
        text-white
        relative
        overflow-hidden
        
        pt-30
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.18),transparent_30%)]" />

      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div
            className="
              mx-auto
              w-24 h-24
              rounded-[28px]
              bg-gradient-to-br
              from-red-500
              via-fuchsia-500
              to-purple-500
              flex items-center justify-center
              shadow-[0_0_60px_rgba(236,72,153,0.35)]
            "
          >
            <Trash2 className="w-12 h-12 text-white" />
          </div>

          <h1
            className="
              mt-6
              text-3xl md:text-5xl
              font-black
            "
          >
            {content.title}
          </h1>

          <p
            className="
              mt-5
              text-gray-300
              leading-8
              text-sm md:text-lg
              max-w-2xl
              mx-auto
            "
          >
            {content.description}
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            relative
            rounded-[30px]
            border border-purple-500/20
            bg-[#120e19cf]
            sbackdrop-blur-xl
            p-6 md:p-10
            sshadow-[0_0_80px_rgba(120,0,255,0.15)]
          "
        >
          {/* TITLE */}
          <div className="flex items-center gap-3 mb-7">
            <div
              className="
                w-12 h-12
                rounded-2xl
                bg-yellow-500/15
                text-yellow-300
                flex items-center justify-center
              "
            >
              <ShieldAlert />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300">
              {content.instructionsTitle}
            </h2>
          </div>

          {/* INSTRUCTIONS */}
          <div className="space-y-4">
            {content.instructions.map((item, index) => (
              <div
                key={index}
                className="
                  flex gap-4
                  items-start
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-4
                "
              >
                <div
                  className="
                    shrink-0
                    w-8 h-8
                    rounded-xl
                    bg-purple-500/20
                    text-purple-300
                    flex items-center justify-center
                    font-bold
                  "
                >
                  ✓
                </div>

                <p
                  className="
                    text-gray-200
                    leading-7
                    text-sm md:text-base
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* WARNING */}
          <div
            className="
              mt-8
              rounded-2xl
              border border-red-500/20
              bg-red-500/10
              p-5
            "
          >
            <p
              className="
                text-red-200
                leading-7
                text-sm md:text-base
              "
            >
              {content.warning}
            </p>
          </div>

          {/* BUTTON */}
          <a
            href={`mailto:smilemedo@outlook.com?subject=${
              isArabic ? "طلب حذف حساب EPICO" : "EPICO Account Deletion Request"
            }`}
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              gap-3
              w-full
              px-7 py-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              to-fuchsia-500
              font-bold
              text-sm md:text-base
              shadow-[0_0_40px_rgba(168,85,247,0.45)]
              hover:scale-[1.02]
              active:scale-95
              transition
            "
          >
            <Mail className="w-5 h-5" />

            {content.button}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AccDelete;
