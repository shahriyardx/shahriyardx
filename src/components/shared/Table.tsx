import React from "react"

type Props = {
  fields: Array<string>
  values?: Array<Array<React.ReactNode>>
  thClass?: string
  noFieldText: string
}

const Table = ({ fields, values, thClass, noFieldText }: Props) => {
  return (
    <table className="w-full border-2 border-zinc-800">
      <thead className="bg-zinc-800 text-zinc-400">
        <tr>
          {fields.map((field, index) => (
            <th key={index} className={`px-5 py-3 text-left ${thClass}`}>
              {field}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {values?.map((val, index) => (
          <tr
            key={index}
            className="even:bg-black/20 cursor-pointer hover:bg-black/50"
          >
            {val.map((v, index) => (
              <td key={index} className="px-5 py-2">
                {v}
              </td>
            ))}
          </tr>
        ))}
        {!Boolean(values?.length) && (
          <tr>
            <td colSpan={fields.length} className="text-center py-3">
              <p className="text-2xl font-bold text-zinc-400">{noFieldText}</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table
