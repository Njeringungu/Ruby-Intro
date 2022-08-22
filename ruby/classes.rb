# instances
# methods
# variable
# writer(setters)
# reader(getter)
# accessor(both reader and writer)

class GroupDescussion
    attr_accessor :name

    # attr_writer :name
    # def people(name)
    #     @my_name = name
    # end

    # attr_reader :name
    # def initialize(name)
    #     @my_name = name
    # end

    # def greet_members
    #     "#@my_name says hello!"
    # end
end

halima = GroupDescussion.new
puts halima.name = "Halima"
# halima.people("Halima")
# puts halima.greet_members