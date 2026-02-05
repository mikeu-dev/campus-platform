<script lang="ts">
	import { enhance } from '$app/forms';
	import { Plus, Search, MoreHorizontal } from 'lucide-svelte';
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Badge } from '$lib/components/ui/badge';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuSeparator,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { Avatar, AvatarFallback } from '$lib/components/ui/avatar';
	
	let { data, form } = $props();

	let showForm = $state(false);
	
	function getInitials(name: string) {
		return name?.charAt(0).toUpperCase() || 'U';
	}
	
	function getRoleVariant(role: string): "default" | "secondary" | "outline" | "destructive" {
		switch (role.toLowerCase()) {
			case 'admin': return 'destructive';
			case 'lecturer': return 'secondary';
			default: return 'outline';
		}
	}
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">User Management</h2>
			<p class="text-muted-foreground">Manage users, roles, and permissions.</p>
		</div>
		<Button onclick={() => (showForm = !showForm)}>
			<Plus class="mr-2 h-4 w-4" />
			Add User
		</Button>
	</div>

	{#if showForm}
		<Card>
			<CardHeader>
				<CardTitle>Create New User</CardTitle>
				<CardDescription>Add a new user to the system.</CardDescription>
			</CardHeader>
			<CardContent>
				<form method="POST" action="?/create" use:enhance onsubmit={() => (showForm = false)} class="space-y-4">
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div class="grid gap-2">
							<Label for="fullName">Full Name</Label>
							<Input type="text" name="fullName" id="fullName" required placeholder="John Doe" />
						</div>
						<div class="grid gap-2">
							<Label for="email">Email</Label>
							<Input type="email" name="email" id="email" required placeholder="john@example.com" />
						</div>
						<div class="grid gap-2">
							<Label for="password">Password</Label>
							<Input type="password" name="password" id="password" required />
						</div>
						<div class="grid gap-2">
							<Label for="roleName">Role</Label>
							<select id="roleName" name="roleName" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
								<option value="student">Student</option>
								<option value="lecturer">Lecturer</option>
								<option value="admin">Admin</option>
							</select>
						</div>
					</div>
					<div class="flex justify-end gap-2 pt-2">
						<Button type="button" variant="outline" onclick={() => (showForm = false)}>Cancel</Button>
						<Button type="submit">Create User</Button>
					</div>
				</form>
				
				{#if form?.error}
					<div class="mt-4 rounded-md bg-destructive/15 p-3 text-sm text-destructive font-medium">
						{form.error}
					</div>
				{/if}
				{#if form?.success}
					<div class="mt-4 rounded-md bg-green-500/15 p-3 text-sm text-green-700 font-medium">
						User created successfully!
					</div>
				{/if}
			</CardContent>
		</Card>
	{/if}

	<Card>
		<CardContent class="p-0">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>User</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Role</TableHead>
						<TableHead class="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each data.users as user (user.id)}
						<TableRow>
							<TableCell class="font-medium">
								<div class="flex items-center gap-3">
									<Avatar class="h-8 w-8">
										<AvatarFallback>{getInitials(user.full_name)}</AvatarFallback>
									</Avatar>
									<span>{user.full_name}</span>
								</div>
							</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>
								<Badge variant={getRoleVariant(user.role)} class="capitalize">
									{user.role}
								</Badge>
							</TableCell>
							<TableCell class="text-right">
								<DropdownMenu>
									<DropdownMenuTrigger>
										{#snippet child({ props })}
											<Button {...props} variant="ghost" size="icon" class="h-8 w-8 p-0">
												<span class="sr-only">Open menu</span>
												<MoreHorizontal class="h-4 w-4" />
											</Button>
										{/snippet}
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>Actions</DropdownMenuLabel>
										<DropdownMenuItem onclick={() => navigator.clipboard.writeText(user.email)}>
											Copy Email
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>Edit User</DropdownMenuItem>
										<DropdownMenuItem class="text-destructive">Delete User</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
					{:else}
						<TableRow>
							<TableCell colspan={4} class="h-24 text-center">
								No users found.
							</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
</div>
