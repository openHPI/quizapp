def lines(text)
  text.split "\n"
end

def file(name)
  File.open(name).read
end

def go(name, filename)
  Quiz.new name, lines(file(filename)).each_slice(6).to_a
end

class Quiz
  @@id = 0

  def initialize(name, question_lines)
    @name = name
    @question_lines = question_lines

    @@id += 100
    @id = @@id
  end

  attr_reader :id

  def questions
    @questions ||= @question_lines.each_with_index.map { |lines, index|
      Question.new self, lines, index+1
    }
  end
end

class Question
  def initialize(quiz, lines, rel_id)
    @quiz = quiz
    @lines = lines
    @rel_id = rel_id
  end

  def id
    @quiz.id + @rel_id
  end

  def text
    @lines.first.strip
  end

  def answers
    @answers ||= @lines[1..4].shuffle.each_with_index.map { |line, index| Answer.new self, line, index+1 }
  end

  def to_js
    "{ id: #{id}, relativeId: #{@rel_id}, quiz_id: #{@quiz.id}, title: '#{text}', answers: #{answers.map(&:id)} },"
  end
end

class Answer
  def initialize(question, line, rel_id)
    @question = question
    @line = line
    @rel_id = rel_id
  end

  def id
    @question.id * 10 + @rel_id
  end

  def correct?
    not @line.start_with? 'x '
  end

  def text
    @line[2..-1].strip
  end

  def to_js
    "{ id: #{id}, question_id: #{@question.id}, title: '#{text}', correct: #{correct?} },"
  end
end


@quiz1 = go 'Internet und Soziale Medien - Basics', 'Internet und Soziale Medien - Basics.txt'
@quiz2 = go 'Internet und Soziale Medien - Advanced', 'Internet und Soziale Medien - Advanced.txt'

