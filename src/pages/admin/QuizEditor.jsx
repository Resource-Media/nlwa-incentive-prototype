import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

const questions = [
  {
    question: 'Which of these items should NOT go in your food waste caddy?',
    options: ['Tea bags', 'Cooked pasta', 'Plastic food packaging', 'Egg shells'],
    correct: 2,
  },
  {
    question: 'How often is food waste collected in most North London boroughs?',
    options: ['Daily', 'Weekly', 'Fortnightly', 'Monthly'],
    correct: 1,
  },
  {
    question: 'What is food waste processed into?',
    options: ['Only compost', 'Compost and biogas for energy', 'Animal feed', 'It goes to landfill'],
    correct: 1,
  },
  {
    question: 'Roughly what percentage of the average household bin is food waste?',
    options: ['10%', '20%', '30%', '50%'],
    correct: 2,
  },
  {
    question: 'What should you line your food waste caddy with?',
    options: ['Plastic bags', 'Newspaper or compostable liners', 'Nothing', 'Tin foil'],
    correct: 1,
  },
]

const optionLabels = ['a', 'b', 'c', 'd']

export default function QuizEditor() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Quiz Editor</h1>
        <div>
          <label className="text-sm text-slate-500 mr-2">Module:</label>
          <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-800">
            <option>April 2026 - Food Waste: Kitchen to Compost</option>
          </select>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Quiz Settings</h2>
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <label className="text-sm text-slate-600 mr-2">Pass mark:</label>
            <select defaultValue="4 out of 5" className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-800">
              <option>3 out of 5</option>
              <option>4 out of 5</option>
              <option>5 out of 5</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">Randomise question order</label>
            <div className="w-10 h-5 bg-slate-300 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow"></div>
            </div>
            <span className="text-xs text-slate-400">Off</span>
          </div>
        </div>
      </div>

      {/* Question Cards */}
      <div className="space-y-4 mb-8">
        {questions.map((q, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="bg-teal-100 text-teal-700 text-xs font-bold px-2.5 py-1 rounded-full shrink-0">
                Q{i + 1}
              </span>
              <input
                type="text"
                readOnly
                defaultValue={q.question}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white text-slate-800 font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-9">
              {q.options.map((opt, j) => {
                const isCorrect = j === q.correct
                return (
                  <div
                    key={j}
                    className={`flex items-center gap-2 border rounded-lg px-3 py-2 text-sm ${
                      isCorrect
                        ? 'border-green-300 bg-green-50 text-green-800'
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q${i}`}
                      checked={isCorrect}
                      readOnly
                      className="accent-green-600"
                    />
                    <span className="font-mono text-xs text-slate-400 mr-1">{optionLabels[j]}.</span>
                    <input
                      type="text"
                      readOnly
                      defaultValue={opt}
                      className={`flex-1 bg-transparent border-none text-sm focus:outline-none ${
                        isCorrect ? 'text-green-800' : 'text-slate-700'
                      }`}
                    />
                    {isCorrect && (
                      <span className="text-xs font-bold text-green-600 shrink-0">&#10003; Correct</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm">
          Save Quiz
        </button>
        <button className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-5 py-2.5 rounded-lg border border-slate-300 transition-colors text-sm">
          Preview Quiz
        </button>
      </div>

      {/* Annotations */}
      <Annotation title="Quiz Authorship">
        Who writes the quiz questions? NLWA comms team, subject matter experts, or Resource Media? Is there a review/approval step before the quiz goes live with the module?
      </Annotation>

      <Annotation title="Question Pool vs Fixed">
        Current design: exactly 5 fixed questions per module. Alternative: a pool of 10-15 questions, with 5 drawn randomly per attempt. Pools prevent answer-sharing but require 2-3x more content creation. Which approach?
      </Annotation>

      <DevNote title="Quiz Data Model">
        Each quiz belongs to one module. Questions: text, 4 options (a-d), correct answer, optional explanation. Pass mark configurable per quiz. Consider: question ordering, answer shuffling.
      </DevNote>
    </div>
  )
}
