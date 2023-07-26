export function shortenAddr(addr: string | undefined) {
	if (!addr) return "";
	return addr.slice(0, 6) + "..." + addr.slice(-4);
}
