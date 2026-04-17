'use client'

interface Props {
  currentStep: number
  totalSteps: number
  stepLabels: string[]
}

export default function StepIndicator({ currentStep, totalSteps, stepLabels }: Props) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        {stepLabels.map((label, i) => {
          const stepNum = i + 1
          const isCompleted = stepNum < currentStep
          const isCurrent = stepNum === currentStep
          return (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium border-2 transition-all
                ${isCompleted ? 'bg-blue-600 border-blue-600 text-white' :
                  isCurrent ? 'border-blue-600 text-blue-600 bg-white' :
                  'border-gray-300 text-gray-400 bg-white'}`}>
                {isCompleted ? '✓' : stepNum}
              </div>
              <span className={`text-[10px] mt-1 hidden sm:block ${isCurrent ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                {label}
              </span>
            </div>
          )
        })}
      </div>
      <div className="w-full bg-gray-200 h-1 rounded-full mt-1">
        <div
          className="bg-blue-600 h-1 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  )
}
