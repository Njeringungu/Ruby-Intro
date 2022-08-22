class GroupDescussion
    attr_reader :name

    def initialize(name)
        @my_name = name
    end
end

mary = GroupDescussion.new('Mary')
puts mary.name