all: build

build:
	echo "Building JSON book"
	./build.sh json json .jsonbook
	echo "Building JAVA-CORE book"
	./build.sh java-core/part1 java-core/part1 .javabook
