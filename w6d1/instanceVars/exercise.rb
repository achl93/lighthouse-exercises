class Person
  def initialize(name)
    @name = name
  end
  attr_accessor(:name)
end
  
p = Person.new('L. Ron')
puts p.name
p.name='Andy'
puts p.name
