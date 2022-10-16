import { Checkbox } from 'antd'
import { FC, useEffect, useState } from 'react'
import React from 'react'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import browser from 'webextension-polyfill'

const CheckboxGroup = Checkbox.Group
const plainOptions = ['Artists', 'Copyrights', 'Characters', 'General', 'Meta']

const CategoryCheckBox: FC = () => {
  const [category, setCategory] = useState<string[]>(['General'])

  const onChange = (checkedValues: CheckboxValueType[]) => {
    browser.storage.local.set({ category: checkedValues as string[] })
    setCategory(checkedValues as string[])
  }

  const getCategory = async () => {
    const getcategory = await browser.storage.local.get('category')
    const temp: string[] = getcategory.category
    setCategory([...temp])
  }

  useEffect(() => {
    getCategory()
  }, [])

  return (
    <CheckboxGroup
      options={plainOptions}
      value={category}
      onChange={onChange}
    />
  )
}

export default CategoryCheckBox
