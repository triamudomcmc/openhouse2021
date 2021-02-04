import React from 'react'

import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import Router from 'next/router'

import Input from 'components/ui/Input'
import { updateUser } from 'lib/db'
import { useAuth } from 'lib/auth'

const RegisterForm = () => {
  const { userData } = useAuth()
  return (
    <Formik
      initialValues={{
        prefix: 'นางสาว',
        name: '',
        nickname: '',
        status: 'เสียชีวิต',
        level: 'มัธยมศึกษาปีที่ 1',
        school: 'วังไกลกังวล',
        news: [],
        purpose: [],
        tos: false
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true)
        await updateUser(userData.uid, values)
        setSubmitting(false)
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 text-sm text-gray-500 bg-white">ข้อมูลส่วนตัว</span>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="prefix" className="block text-sm font-medium text-gray-700">
                คำนำหน้าชื่อ
              </label>
              <select
                id="prefix"
                name="prefix"
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.prefix}
              >
                <option>นางสาว</option>
                <option>นาง</option>
                <option>นาย</option>
                <option>เด็กชาย</option>
                <option>เด็กหญิง</option>
                <option>ว่าที่ร้อยตรี</option>
                <option>ว่าที่ร้อยตรีหญิง</option>
              </select>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">
                ชื่อ-สกุล
              </label>
              <div className="mt-1">
                <Input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  required
                />
              </div>
              <p className="my-2 text-sm text-red-500">
                {errors.name && touched.name && errors.name}
              </p>
            </div>

            <div>
              <label
                htmlFor="nickname"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                ชื่อเล่น
              </label>
              <div className="mt-1">
                <Input
                  id="nickname"
                  type="text"
                  name="nickname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nickname}
                  required
                />
              </div>
              <p className="my-2 text-sm text-red-500">
                {errors.nickname && touched.nickname && errors.nickname}
              </p>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                สถานภาพ
              </label>
              <select
                id="status"
                name="status"
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.status}
              >
                <option>เสียชีวิต</option>
              </select>
              <p className="my-2 text-sm text-red-500">
                {errors.status && touched.status && errors.status}
              </p>
            </div>

            <div>
              <label htmlFor="level" className="block text-sm font-medium text-gray-700">
                ระดับชั้น
              </label>
              <select
                id="level"
                name="level"
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.level}
              >
                <option>ต่ำกว่ามัธยมศึกษาปีที่ 1</option>
                <option>มัธยมศึกษาปีที่ 1</option>
                <option>มัธยมศึกษาปีที่ 2</option>
                <option>มัธยมศึกษาปีที่ 3</option>
                <option>มัธยมศึกษาปีที่ 4</option>
                <option>มัธยมศึกษาปีที่ 5</option>
                <option>มัธยมศึกษาปีที่ 6</option>
              </select>
              <p className="my-2 text-sm text-red-500">
                {errors.level && touched.level && errors.level}
              </p>
            </div>

            <div>
              <label htmlFor="school" className="block text-sm font-medium text-gray-700">
                โรงเรียน
              </label>
              <select
                id="school"
                name="school"
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.school}
              >
                <option>วังไกลกังวล</option>
              </select>
              <p className="my-2 text-sm text-red-500">
                {errors.school && touched.school && errors.school}
              </p>
            </div>
          </div>

          <div className="relative mt-4">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 text-sm text-gray-500 bg-white">แบบสอบถาม</span>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div id="checkbox-group">
              ได้รับข่าวสารของ Triam Udom Open House จากที่ใดบ้าง (ตอบได้มากกว่า 1 ข้อ)
            </div>
            <div role="group" aria-labelledby="checkbox-group">
              <Field type="checkbox" name="news" value="facebook">
                {({ field }) => (
                  <div className="flex items-center mt-4">
                    <input
                      {...field}
                      id="facebook"
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <label htmlFor="facebook" className="block ml-2 text-sm text-gray-900">
                      Facebook: Triam Udom Open House
                    </label>
                  </div>
                )}
              </Field>
              <Field type="checkbox" name="news" value="instagram">
                {({
                  field // { name, value, onChange, onBlur }
                }) => (
                  <div className="flex items-center mt-4">
                    <input
                      {...field}
                      id="instagram"
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <label htmlFor="instagram" className="block ml-2 text-sm text-gray-900">
                      Instagram: @triamudom.oph
                    </label>
                  </div>
                )}
              </Field>
              <Field type="checkbox" name="news" value="twitter">
                {({
                  field // { name, value, onChange, onBlur }
                }) => (
                  <div className="flex items-center mt-4">
                    <input
                      {...field}
                      id="twitter"
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <label htmlFor="twitter" className="block ml-2 text-sm text-gray-900">
                      Twittter: @triamudomoph
                    </label>
                  </div>
                )}
              </Field>
              <Field type="checkbox" name="news" value="student">
                {({
                  field // { name, value, onChange, onBlur }
                }) => (
                  <div className="flex items-center mt-4">
                    <input
                      {...field}
                      id="student"
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <label htmlFor="student" className="block ml-2 text-sm text-gray-900">
                      นักเรียนโรงเรียนเตรียมฯ
                    </label>
                  </div>
                )}
              </Field>
              <Field type="checkbox" name="news" value="friend">
                {({
                  field // { name, value, onChange, onBlur }
                }) => (
                  <div className="flex items-center mt-4">
                    <input
                      {...field}
                      id="friend"
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <label htmlFor="friend" className="block ml-2 text-sm text-gray-900">
                      เพื่อน
                    </label>
                  </div>
                )}
              </Field>
              <Field type="checkbox" name="news" value="parent">
                {({
                  field // { name, value, onChange, onBlur }
                }) => (
                  <div className="flex items-center mt-4">
                    <input
                      {...field}
                      id="parent"
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <label htmlFor="parent" className="block ml-2 text-sm text-gray-900">
                      ผู้ปกครอง
                    </label>
                  </div>
                )}
              </Field>
              <Field type="checkbox" name="news" value="school">
                {({
                  field // { name, value, onChange, onBlur }
                }) => (
                  <div className="flex items-center mt-4">
                    <input
                      {...field}
                      id="school-info"
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <label htmlFor="school-info" className="block ml-2 text-sm text-gray-900">
                      โรงเรียน
                    </label>
                  </div>
                )}
              </Field>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div id="checkbox-group">
              จุดประสงค์ในการเข้าร่วม Triam Udom Online Open House 2021 (ตอบได้มากกว่า 1 ข้อ)
            </div>
            <div role="group" aria-labelledby="checkbox-group">
              <Field type="checkbox" name="purpose" value="admission">
                {({
                  field // { name, value, onChange, onBlur }
                }) => (
                  <div className="flex items-center mt-4">
                    <input
                      {...field}
                      id="admission"
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <label htmlFor="admission" className="block ml-2 text-sm text-gray-900">
                      หาข้อมูลการสอบเข้าโรงเรียนเตรียมฯ
                    </label>
                  </div>
                )}
              </Field>
              <Field type="checkbox" name="purpose" value="live">
                {({
                  field // { name, value, onChange, onBlur }
                }) => (
                  <div className="flex items-center mt-4">
                    <input
                      {...field}
                      id="live"
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <label htmlFor="live" className="block ml-2 text-sm text-gray-900">
                      ดู LIVE
                    </label>
                  </div>
                )}
              </Field>
              <Field type="checkbox" name="purpose" value="info">
                {({
                  field // { name, value, onChange, onBlur }
                }) => (
                  <div className="flex items-center mt-4">
                    <input
                      {...field}
                      id="info"
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <label htmlFor="info" className="block ml-2 text-sm text-gray-900">
                      หาข้อมูลเกี่ยวกับโรงเรียนเตรียมฯ เพื่อประกอบการตัดสินใจ
                    </label>
                  </div>
                )}
              </Field>
              <Field type="checkbox" name="purpose" value="inspiration">
                {({
                  field // { name, value, onChange, onBlur }
                }) => (
                  <div className="flex items-center mt-4">
                    <input
                      {...field}
                      id="inspiration"
                      type="checkbox"
                      className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <label htmlFor="inspiration" className="block ml-2 text-sm text-gray-900">
                      หาแรงบันดาลใจ
                    </label>
                  </div>
                )}
              </Field>
            </div>
          </div>

          <div className="relative mt-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-start">
              <span className="px-2 text-sm text-gray-500 bg-white">
                ข้อตกลงและเงื่อนไขในการใช้งาน
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center mt-4">
              <input
                id="tos"
                name="tos"
                type="checkbox"
                className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <label htmlFor="tos" className="block ml-2 text-sm text-gray-900">
                ยอมรับข้อตกลงและเงื่อนไขการใช้งาน
              </label>
            </div>

            <p className="my-2 text-sm text-red-500">{errors.tos && touched.tos && errors.tos}</p>
          </div>

          <div className="flex flex-row items-baseline justify-between mt-6">
            <button
              className="inline-flex items-center px-5 py-2 text-base font-medium text-white bg-pink-600 border border-transparent rounded-full shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
              disabled={isSubmitting}
            >
              ลงทะเบียน
            </button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default RegisterForm
