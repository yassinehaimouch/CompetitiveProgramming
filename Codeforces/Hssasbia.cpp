#include <iostream>
 
int	main(void)
{
    int a, b, c;
	std::cin >> a >> b >> c;
	if (a * b >= c)
		std::cout << "Yes" << std::endl;
	else
		std::cout << "NO" << std::endl;
	return (0);
}