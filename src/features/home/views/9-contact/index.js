import React from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as Unicons from "@iconscout/react-unicons";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
import styles from './styles.module.css'

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

export const Contact = () => {
  const { t } = useTranslation();
  

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const onSubmit = async (values, { resetForm }) => {
    const formElement = document.getElementById("tuFormularioId");
    emailjs
      .sendForm(
        "service_3ns59e4",
        "portafolios_sergiodm92",
        formElement,
        "jR1VwP82rm0z07cZP"
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success("Mensaje enviado correctamente");
        }
      })
      .catch(() => {
        toast.error("Ocurrió un error inesperado");
      });
    
    resetForm();
  };

  return (
    <section
      id="contact"
      className="relative bg-gray-50 dark:bg-slate-800"
    >
      <div className={`container ${styles.container}`}>
        <div className={`grid grid-cols-1 text-center ${styles.titleContainer}`}>
          <span className="  md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            {t("contact_me")}
          </span>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            {t("contact_me_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 items-center gap-[30px]">
          <div className="lg:col-span-8">
            <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form id="tuFormularioId">
                  <div className="grid lg:grid-cols-12 lg:gap-5">
                    <div className="lg:col-span-6 mb-5">
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                        placeholder={t("Name")}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="lg:col-span-6 mb-5">
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                        placeholder={t("Email")}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <Field
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                        placeholder={t("Subject")}
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-red-200 text-sm mt-1"
                      />
                    </div>

                    <div className="mb-5">
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                        placeholder={t("Message")}
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center"
                  >
                    {t("SendMessage")}
                  </button>
                </Form>
              </Formik>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="lg:ms-8">
              <div className="flex">
                <div className="icons text-center mx-auto">
                  <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0" />
                </div>

                <div className="flex-1 ms-6">
                  <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                    {t("Phone")}
                  </h5>
                  <Link
                    href="tel:+152534-468-854"
                    className="text-slate-400 text-[15px]"
                  >
                    +54 387 5185752
                  </Link>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="icons text-center mx-auto">
                  <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0" />
                </div>

                <div className="flex-1 ms-6">
                  <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                    Email
                  </h5>
                  <Link
                    href="mailto:contact@example.com"
                    className="text-slate-400 text-[15px]"
                  >
                    crgiodm@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="icons text-center mx-auto">
                  <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0" />
                </div>

                <div className="flex-1 ms-6">
                  <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                    {t("Location")}
                  </h5>
                  <p className="text-slate-400 text-[15px] mb-2">
                    Salta Argentina
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
